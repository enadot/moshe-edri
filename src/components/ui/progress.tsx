"use client";

import * as React from "react";
import ProgressBar from "@atlaskit/progress-bar";
import { cn } from "@/lib/utils";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, style, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        width: "100%",
        ...style,
      }}
      {...props}
    >
      <ProgressBar
        appearance="success"
        value={Math.max(0, Math.min(1, value / 100))}
        ariaLabel="progress"
      />
    </div>
  )
);
Progress.displayName = "Progress";

export { Progress };
