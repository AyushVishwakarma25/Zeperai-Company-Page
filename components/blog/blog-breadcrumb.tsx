import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface Crumb {
  name: string
  href?: string
}

export function BlogBreadcrumb({ items }: { items: Crumb[] }) {
  return (
    <Breadcrumb className="mb-8">
      <BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <span key={item.name} className="flex items-center gap-1.5">
              <BreadcrumbItem>
                {isLast || !item.href ? (
                  <BreadcrumbPage className="text-[#0A0A0B]">{item.name}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={item.href} className="text-[#6B6B72] hover:text-[#4452FB]">
                      {item.name}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </span>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
