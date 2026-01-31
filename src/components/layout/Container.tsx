import * as React from "react";
import { cn } from "../../lib/cn";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  size?: "content" | "wide" | "full";
};

export default function Container({
  className,
  size = "content",
  ...props
}: Props) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        // content: best reading width even on 32" screens
        size === "content" && "max-w-6xl",
        // wide: for hero/sections that need more space but still controlled
        size === "wide" && "max-w-7xl",
        // full: edge-to-edge backgrounds, content still uses inner container
        size === "full" && "max-w-none",
        className,
      )}
      {...props}
    />
  );
}
