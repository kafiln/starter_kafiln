"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

const VisuallyHidden = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "absolute h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]",
      className
    )}
    {...props}
  />
));
VisuallyHidden.displayName = "VisuallyHidden";

export { VisuallyHidden };
