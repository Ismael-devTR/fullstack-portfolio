import type { ComponentPropsWithoutRef, ReactNode } from "react"
import { forwardRef } from "react"
import { useMouseGlow } from "../hooks/useMouseGlow"
import { useRef } from "react"

type Variant = "orange" | "dark"

interface ButtonProps extends ComponentPropsWithoutRef<"a"> {
  variant?: Variant
  children: ReactNode
}

const Button = forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ variant = "orange", children, className = "", ...props }, ref) => {
    const glowRef = useRef<HTMLAnchorElement>(null)
    useMouseGlow(glowRef)

    const variantStyles: Record<Variant, string> = {
      orange: "button-site bg-orange",
      dark: "button-site bg-dark-surface text-white",
    }

    const baseStyles = "text-base font-semibold"
    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`.trim()

    return (
      <a
        ref={(node) => {
          (glowRef as React.MutableRefObject<HTMLAnchorElement | null>).current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLAnchorElement | null>).current = node;
        }}
        className={combinedClassName}
        {...props}
      >
        {children}
      </a>
    )
  }
)

Button.displayName = "Button"

export default Button
