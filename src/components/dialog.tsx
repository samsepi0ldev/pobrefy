import { cn } from '@/lib/utils'
import * as PrimitiveDialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import React from 'react'

const Dialog = PrimitiveDialog.Root
const DialogTrigger = PrimitiveDialog.Trigger
const DialogTitle = PrimitiveDialog.Title
const DialogDescription = PrimitiveDialog.Description

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof PrimitiveDialog.Overlay>,
  React.ComponentPropsWithoutRef<typeof PrimitiveDialog.Overlay>
>(({ className, ...props }, ref) => (
  <PrimitiveDialog.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/75 backdrop-blur-sm',
      'data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out',
      className
    )}
    {...props}
  />
))

DialogOverlay.displayName = PrimitiveDialog.Overlay.displayName

const DialogContent = React.forwardRef<
React.ElementRef<typeof PrimitiveDialog.Content>,
React.ComponentPropsWithoutRef<typeof PrimitiveDialog.Content>
>(({ className, children, ...props }, ref) => (
  <PrimitiveDialog.Portal>
    <DialogOverlay />
    <PrimitiveDialog.Content
      ref={ref}
      {...props}
      className={cn(
        'z-50 rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl bg-zinc-900 border border-zinc-700/65 p-4',
        className
      )}
    >
      {children}
      <PrimitiveDialog.Close className='absolute right-4 top-4 rounded-full bg-zinc-950/50 hover:bg-zinc-800 p-1 text-white transition-colors'>
        <X className='size-4' />
      </PrimitiveDialog.Close>
    </PrimitiveDialog.Content>
  </PrimitiveDialog.Portal>
))

DialogContent.displayName = PrimitiveDialog.Content.displayName

export {
  Dialog,
  DialogTitle,
  DialogDescription,
  DialogOverlay,
  DialogTrigger,
  DialogContent
}
