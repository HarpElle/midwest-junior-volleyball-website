import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'white' | 'teal' | 'amber'
  size?: 'sm' | 'md' | 'lg' | 'default' | 'icon'
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? 'span' : 'button'
    
    return (
      <Comp
        className={cn(
          // Base styles
          'inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          
          // Size variants
          {
            'h-9 px-3 text-sm': size === 'sm',
            'h-10 px-4 py-2': size === 'default',
            'h-11 px-8 text-base': size === 'lg',
            'h-10 w-10': size === 'icon',
          },
          
          // Color variants
          {
            'bg-brand-red text-white hover:bg-brand-red/90 active:bg-brand-red/80 focus-visible:ring-brand-red': variant === 'primary',
            'bg-brand-coral text-white hover:bg-brand-coral/90 active:bg-brand-coral/80 focus-visible:ring-brand-coral': variant === 'secondary',
            'border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white': variant === 'outline',
            'bg-white text-brand-blue hover:bg-brand-powder hover:text-brand-blue border border-white/20 shadow-sm': variant === 'white',
            'bg-teal text-white hover:bg-teal-dark active:bg-teal-dark focus-visible:ring-teal': variant === 'teal',
            'bg-amber text-white hover:bg-amber-dark active:bg-amber-dark focus-visible:ring-amber': variant === 'amber',
            'bg-transparent text-current hover:bg-white/10': variant === 'ghost',
            'text-brand-blue underline-offset-4 hover:underline': variant === 'link',
          },
          
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button } 