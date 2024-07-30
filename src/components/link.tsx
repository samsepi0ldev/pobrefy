import NextLink from 'next/link'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface LinkProps extends ComponentProps<typeof NextLink> {}

export function Link ({ className, ...props }: LinkProps) {
  return (
    <NextLink
      className={twMerge(
        'p-3 w-full flex items-center gap-x-2.5 rounded-lg hover:bg-zinc-800 transition-colors',
        className
      )}
      {...props}
    />
  )
}
