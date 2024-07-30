import { z } from 'zod'

import { DialogContent, DialogTitle } from '@/components/dialog'
import { SaveButtonPlaylist } from './save-button-playlist'

const createPlaylistSchema = z.object({
  name: z.string()
})

export function DialogCreatePlaylist () {
  async function handleCreatePlaylist (data: FormData) {
    'use server'

    const { name } = createPlaylistSchema.parse(Object.fromEntries(data))
    await new Promise(resolve => setTimeout(resolve, 3000))

    console.log(name)
  } 

  return (
    <DialogContent>
      <DialogTitle>
        Nova playlist
      </DialogTitle>
      <form action={handleCreatePlaylist} className='mt-4'>
        <div className='relative group'>
          <span className='absolute left-2.5 -top-2 text-xs text-zinc-400 font-semibold invisible group-focus-within:visible'>
            Nome
          </span>
          <input
            type='text'
            className='h-10 w-full px-3 rounded outline-none bg-zinc-800 focus-within:ring-1 focus-within:ring-zinc-700 text-sm placeholder-zinc-500'
            placeholder='Nome da playlist'
            name='name'
          />
        </div>
        <SaveButtonPlaylist />
      </form>
    </DialogContent>
  )
}
