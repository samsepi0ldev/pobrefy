import { ArrowDown, Plus } from 'lucide-react'
import { z } from 'zod'
import { useFormStatus } from 'react-dom'

import { Button } from '@/components/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/dialog'
import { SaveButtonPlaylist } from './save-button-playlist'
import { DialogCreatePlaylist } from './dialog-create-playlist'

const createPlaylistSchema = z.object({
  name: z.string()
})

export default function Playlists () {

  

  return (
    <div className='px-8'>
      <div className='flex items-center gap-3 mb-2'>
        <h3 className='text-lg font-semibold text-white leading-10'>
          Playlists
        </h3>
        <div className='flex items-center gap-1.5'>
          <Button size='sm' variant='ghost'>
            <ArrowDown className='size-4 flex-shrink-0' />
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button size='sm' variant='ghost'>
                <Plus className='size-4 flex-shrink-0' />
              </Button>
            </DialogTrigger>
            <DialogCreatePlaylist />
          </Dialog>
        </div>
      </div>

      <div>

      </div>
    </div>
  )
}
