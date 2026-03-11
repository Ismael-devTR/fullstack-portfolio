import { forwardRef, type ComponentPropsWithoutRef } from 'react'

type Variant = "main" | "secondary"

export interface CardProps extends ComponentPropsWithoutRef<"div"> {
  labelCard: string
  description: string
  variant?: Variant
}

const variantConfig = {
  main: {
    card: "bg-orange",
    label: "font-mono text-base",
    description: "font-display text-5xl",
  },
  secondary: {
    card: "bg-card",
    label: "font-mono text-base text-gray-600",
    description: "font-display text-5xl text-white",
  },
} as const

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "secondary", labelCard, description, className = "", ...props }, ref) => {
    const styles = variantConfig[variant]
    const baseStyles = "metric-card p-5"

    return (
      <div ref={ref} className={`${baseStyles} ${styles.card} ${className}`.trim()} {...props}>
        <span className={styles.label}>{labelCard}</span>
        <p className={styles.description}>{description}</p>
      </div>
    )
  }
)

Card.displayName = "Card"

export default Card
