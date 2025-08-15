import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex gap-2 items-center justify-center rounded-md border px-2 py-1 text-sm font-medium w-fit whitespace-nowrap shrink-0 bg-gray-50 dark:bg-zinc-900 dark:border-zinc-500 dark:hover:border-zinc-500 hover:border-zinc-300 transition-colors",
  {
    variants: {
      variant: {
        default:
          "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
