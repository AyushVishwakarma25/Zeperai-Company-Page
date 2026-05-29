import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { z } from 'zod'

// Zod schema for D2C Growth Partner form validation
const d2cLeadSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  brandName: z.string().min(2, 'Brand name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(10, 'Valid phone required'),
  website: z.string().optional(),
  productType: z.string().min(1, 'Product type is required'),
  brandStage: z.string().min(1, 'Brand stage is required'),
  brandingStatus: z.array(z.string()).optional(),
  needs: z.array(z.string()).optional(),
  launchTimeline: z.string().min(1, 'Launch timeline is required'),
  budget: z.string().min(1, 'Budget is required'),
  biggestChallenge: z.string().min(10, 'Challenge description required'),
})

type D2CLead = z.infer<typeof d2cLeadSchema>

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate form data
    const validatedData = d2cLeadSchema.parse(body)

    // Create Supabase client
    const supabase = createClient()

    // Insert into Supabase leads table
    const { data, error } = await supabase
      .from('leads')
      .insert({
        full_name: validatedData.fullName,
        brand_name: validatedData.brandName,
        email: validatedData.email,
        phone: validatedData.phone,
        website: validatedData.website,
        product_type: validatedData.productType,
        brand_stage: validatedData.brandStage,
        branding_status: validatedData.brandingStatus,
        needs: validatedData.needs,
        launch_timeline: validatedData.launchTimeline,
        budget: validatedData.budget,
        biggest_challenge: validatedData.biggestChallenge,
        source: 'd2c-growth-partner',
      })
      .select()

    if (error) {
      console.error('[v0] Supabase insert error:', error)
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to save lead data',
        },
        { status: 500 }
      )
    }

    console.log('[v0] Lead inserted successfully:', data)

    return NextResponse.json(
      {
        success: true,
        message: 'Lead captured successfully',
        leadId: data?.[0]?.id,
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: error.errors,
        },
        { status: 400 }
      )
    }

    console.error('[v0] API error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
      },
      { status: 500 }
    )
  }
}
