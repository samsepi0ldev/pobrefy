import * as PrimitiveTooltip from '@radix-ui/react-tooltip'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const TooltipProvider = PrimitiveTooltip.Provider
const Tooltip = PrimitiveTooltip.Root
const TooltipTrigger = PrimitiveTooltip.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof PrimitiveTooltip.Content>,
  React.ComponentPropsWithoutRef<typeof PrimitiveTooltip.Content>
>(({ className, children, ...props }, ref) => (
  <PrimitiveTooltip.Portal>
    <PrimitiveTooltip.Content
      ref={ref}
      className={twMerge(
        'z-50 p-3 bg-zinc-950 rounded text-white text-sm border border-zinc-800',
        'data-[state=delayed-open]:animate-in data-[state=closed]:animate-out data-[state=delayed-open]:fade-in data-[state=delayed-open]:zoom-in-95 data-[state=closed]:fade-out data-[state=closed]:zoom-out-95',
        className
      )}
      {...props}
    >
      {children}
      <div className='size-2 bg-zinc-950 border-r border-b border-b-zinc-800 border-r-zinc-800 absolute left-1/2 -bottom-1 -translate-x-1/2 rotate-45' />
    </PrimitiveTooltip.Content>
  </PrimitiveTooltip.Portal>
))

TooltipContent.displayName = PrimitiveTooltip.Content.displayName

export {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent
}
