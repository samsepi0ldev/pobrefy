import { ArrowDown, Crosshair, Shuffle } from 'lucide-react'

import { Button } from '@/components/button'

export default function Musics () {
  return (
    <section className='px-8'>
      <div className='flex items-center gap-3 mb-2'>
        <h3 className='text-lg font-semibold text-white leading-10'>
          Musicas
        </h3>
        <div className='flex items-center gap-1.5'>
          <Button size='sm' variant='ghost'>
            <ArrowDown className='size-4 flex-shrink-0' />
          </Button>
          <Button size='sm' variant='ghost'>
            <Crosshair className='size-4 flex-shrink-0' />
          </Button>
          <Button size='sm' variant='ghost'>
            <Shuffle className='size-4 flex-shrink-0' />
          </Button>
        </div>
      </div>
      <div className='flex items-center gap-x-2'>
        <Button data-active={true} size='xs'>
          Todos
        </Button>
        <Button size='xs'>
          Favoritos
        </Button>
        <Button size='xs'>
          Em cache
        </Button>
        <Button size='xs'>
          Baixados
        </Button>
      </div>
    </section>
  )
}
