import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

import { Button } from '@/components/button'
import { ForYouThumbnail } from '@/components/for-you-thumbnail'
import { Thumbnail } from '@/components/thumbnail'

export default function Home () {
  return (
    <>
      <section className='px-8 pb-9 mb-2'>
        <div className='flex items-center justify-between'>
          <h3 className='text-lg font-semibold text-white leading-10 mb-2'>
            Seção de titulo
          </h3>

          <div className='flex items-center gap-2 h-full'>
            <Button size='sm'>
              <ChevronLeft className='size-4 flex-shrink-0' />
            </Button>
            <Button size='sm'>
              <ChevronRight className='size-4 flex-shrink-0' />
            </Button>
          </div>
        </div>

        <div className='flex gap-x-6'>
          <ForYouThumbnail />
          <ForYouThumbnail />
          <ForYouThumbnail />
          <ForYouThumbnail />
        </div>
      </section>
      <section className='px-8 pb-9 mb-2'>
        <div className='flex items-center justify-between'>
          <h3 className='text-lg font-semibold text-white leading-10 mb-2'>
            Seção de titulo
          </h3>

          <div className='flex items-center gap-2 h-full'>
            <Button size='sm'>
              <ChevronLeft className='size-4 flex-shrink-0' />
            </Button>
            <Button size='sm'>
              <ChevronRight className='size-4 flex-shrink-0' />
            </Button>
          </div>
        </div>

        <div className='flex gap-x-6'>
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
        </div>
      </section>
    </>
  )
}
