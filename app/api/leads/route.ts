import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

// Zod schema for form validation
const leadSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  companyName: z.string().min(1, "Company name is required"),
  websiteUrl: z.string().url("Invalid website URL").optional().or(z.literal("")),
  country: z.enum(["India", "UAE", "Australia", "Singapore", "Other"], {
    errorMap: () => ({ message: "Please select a valid country" }),
  }),
  monthlyRevenue: z.string().min(1, "Monthly revenue range is required"),
  monthlyAdSpend: z.string().min(1, "Monthly ad spend is required"),
  biggestChallenge: z.string().min(1, "Please select your biggest challenge"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
})

type Lead = z.infer<typeof leadSchema>

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate form data
    const validatedData = leadSchema.parse(body)

    // Log the lead (in production, save to database)
    console.log("[v0] Lead submission:", validatedData)

    // TODO: Integrate with email service or CRM
    // For now, we're just validating and returning success

    // Track GA4 event
    if (request.headers.get("x-ga-client-id")) {
      console.log("[v0] GA4 conversion event should be tracked client-side")
    }

    return NextResponse.json(
      {
        success: true,
        message: "Lead captured successfully",
        data: validatedData,
        // In production, generate a unique token for Cal booking link
        bookingToken: `lead_${Date.now()}`,
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: error.errors,
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 }
    )
  }
}
