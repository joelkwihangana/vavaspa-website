import React, { useId } from "react";
import { cn } from "../../lib/cn";

// 1. We define a polymorphic type. T extends ElementType allows us 
// to pass 'input', 'select', or 'textarea'.
type FormFieldProps<T extends React.ElementType> = {
  label: string;
  error?: string;
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

export const FormField = <T extends React.ElementType = "input">({
  label,
  error,
  className,
  as,
  children,
  ...props
}: FormFieldProps<T>) => {
  const id = useId();
  const Component = as || "input"; // Default to input if 'as' isn't provided

  const baseStyles = cn(
    "mt-1.5 w-full rounded-lg border border-border/50 bg-white px-4 py-2.5 text-sm transition-all",
    "placeholder:text-muted/50 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/10",
    "disabled:cursor-not-allowed disabled:opacity-50",
    error && "border-red-500 focus:border-red-500 focus:ring-red-500/10",
    className
  );

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-sm font-medium tracking-tight text-text">
        {label}
      </label>
      
      {/* We use the 'Component' variable here. TypeScript now knows 
        that if Component is 'textarea', 'props' can include 'rows'.
      */}
      <Component id={id} className={baseStyles} {...props}>
        {children}
      </Component>
      
      {error && <span className="mt-1 text-xs text-red-500">{error}</span>}
    </div>
  );
};