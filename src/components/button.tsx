import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: 'relative inline-flex gap-x-2 flex-shrink-0 justify-center items-center rounded transition-colors ease-in-out duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:select-none border-none cursor-pointer',
  variants: {
    variant: {
      outline: 'bg-transparent border border-purplepobrefy-dark',
      ghost: 'bg-transparent border-none border-transparent hover:enabled:bg-zinc-600',
      secondary: 'bg-zinc-700 hover:enabled:bg-zinc-600 text-zinc-100',
      primary: 'bg-purplepobrefy-dark hover:enabled:bg-purplepobrefy-base',
    },
    size: {
      base: 'px-6 py-[0.625rem] text-base max-md:px-3',
      icon: 'p-3 rounded-full size-10',
      md: 'p-3 text-base',
      xs: 'py-1.5 px-3 text-sm',
      sm: 'rounded-full size-6'
    }
  },
  defaultVariants: {
    variant: 'secondary',
    size: 'base'
  }
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof button> {}

export function Button ({ className, size, variant, ...props }: ButtonProps) {
  return (
    <button
      className={button({ className, size, variant })}
      {...props}
    />
  )
}
