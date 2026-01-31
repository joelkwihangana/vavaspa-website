import * as React from "react";
import { cn } from "../../lib/cn";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "wide";
};

export default function Container({
  className,
  size = "default",
  ...props
}: Props) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        size === "default" ? "max-w-6xl" : "max-w-7xl",
        className,
      )}
      {...props}
    />
  );
}
