import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/button'
import { api } from '@/lib/api'

export interface Request {
  artists: Artist[]
  continuation: string
}

export interface Artist {
  id: string
  name: string
  subscribers: string
  thumbnail: string
}

export default async function Artists () {
  const artists = await api.get<Request>(`/artists?search=Michael`)

  return (
    <section className='px-8'>
      <div className='flex items-center gap-3 mb-2'>
        <h3 className='text-lg font-semibold text-white leading-10'>
          Artistas
        </h3>
        <div className='flex items-center gap-1.5'>
          <Button size='sm' variant='ghost'>
            <ArrowDown className='size-4 flex-shrink-0' />
          </Button>
        </div>
      </div>
      <div className='grid auto-rows-min grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))]'>
        {artists.data.artists.map(artist => (
          <Link
            key={artist.id}
            href={`/artists/${artist.id}`}
            className='flex flex-col items-center justify-center w-48 gap-y-2 hover:bg-zinc-800 rounded-lg p-3 transition-colors'
          >
            <div className='relative size-40 rounded-full overflow-hidden'>
              <Image
                src={artist.thumbnail}
                alt={artist.name}
                fill={true}
                className='object-cover'
              />
            </div>
            <span className='text-sm font-medium text-center'>
              {artist.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
