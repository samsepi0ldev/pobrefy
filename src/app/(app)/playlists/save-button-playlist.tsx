'use client'

import { Button } from '@/components/button'
import { Loader2 } from 'lucide-react'
import { useFormStatus } from 'react-dom'

export function SaveButtonPlaylist () {
  const { pending } = useFormStatus()

  return (
    <Button
      variant='primary'
      size='xs'
      className='mt-4 ml-auto flex gap-2'
      disabled={pending}
      type='submit'
    >
      Salvar
      {pending && (
        <Loader2 className='size-4 animate-spin' />
      )}
    </Button>
  )
}
