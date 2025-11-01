import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex gap-2 items-center justify-center rounded-md px-2 py-1 text-sm font-medium w-fit bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 shadow-[inset_0_1px_2px_#00000014,inset_0_1px_4px_#0000000a] text-black dark:text-white font-bold",
  {
    variants: {
      variant: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
