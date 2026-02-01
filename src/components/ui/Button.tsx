import * as React from "react";
import { cn } from "../../lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: React.ReactNode;
};

/**
 * Button can render as:
 * - <button> (default)
 * - <a> when as="a" (href becomes valid)
 */
type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type ButtonAsAnchor = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
  };

type Props = ButtonAsButton | ButtonAsAnchor;

const base =
  "inline-flex items-center justify-center rounded-xl font-medium transition " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30 " +
  "disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white  hover:opacity-95 active:opacity-90",
  secondary:
    "bg-card text-text border border-border hover:bg-bg active:bg-bg/70",
  ghost: "text-text hover:bg-bg hover:text-text active:bg-bg/70",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export default function Button(props: Props) {
  const {
    className,
    variant = "primary",
    size = "md",
    as = "button",
    ...rest
  } = props as Props & { as?: "button" | "a" };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (as === "a") {
    const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;

    return <a className={classes} {...anchorProps} />;
  }

  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;

  return <button className={classes} {...buttonProps} />;
}
