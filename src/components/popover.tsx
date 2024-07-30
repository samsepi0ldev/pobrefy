import * as PrimitivePopover from '@radix-ui/react-popover'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const Popover = PrimitivePopover.Root

const PopoverTrigger = React.forwardRef<
  React.ElementRef<typeof PrimitivePopover.Trigger>,
  React.ComponentPropsWithoutRef<typeof PrimitivePopover.Trigger>
>((props, ref) => (
  <>
    <PrimitivePopover.Trigger
      ref={ref}
      {...props}
    />
    <PrimitivePopover.Anchor />
  </>
))

PopoverTrigger.displayName = PrimitivePopover.Trigger.displayName

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PrimitivePopover.Content>,
  React.ComponentPropsWithoutRef<typeof PrimitivePopover.Content>
>(({ className, ...props }, ref) => (
  <PrimitivePopover.Portal>
    <PrimitivePopover.Content
      ref={ref}
      className={twMerge(
        'z-50 bg-zinc-950 border border-zinc-800 p-3 rounded',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=open]:zoom-in-95 data-[state=closed]:fade-out data-[state=closed]:zoom-out-95',
        className
      )}
      {...props}
    />
  </PrimitivePopover.Portal>
))

PopoverContent.displayName = PrimitivePopover.Content.displayName

export {
  Popover,
  PopoverTrigger,
  PopoverContent
}