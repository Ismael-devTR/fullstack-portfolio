import type { ComponentPropsWithoutRef, ReactNode } from "react"
import { forwardRef } from "react"

type Variant = "orange" | "dark"

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: Variant
  children: ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "orange", children, className = "", type = "button", ...props }, ref) => {
    const variantStyles: Record<Variant, string> = {
      orange: "button-site bg-orange",
      dark: "button-site bg-dark-surface text-white",
    }

    const baseStyles = "text-base font-semibold"
    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`.trim()

    return (
      <button
        ref={ref}
        type={type}
        className={combinedClassName}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"

export default Button
