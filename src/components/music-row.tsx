import { Ellipsis, Play } from 'lucide-react'
import { Heart } from 'iconsax-react'
import Image from 'next/image'

export interface Music {
  index: number
  id: string
  title: string
  artist: string
  thumbnail: string
  album: string
  duration: Duration
}

export interface Duration {
  text: string
  seconds: number
}

interface MusicRowProps {
  data: Music
}

export function MusicRow ({ data: { index, title, artist, thumbnail, duration, album } }: MusicRowProps) {
  return (
    <div className='rounded grid grid-cols-[auto_4fr_2fr_1fr] grid-row-auto px-4 gap-4 hover:bg-zinc-800 h-14 active:bg-zinc-700 group transition-all cursor-pointer'>
      <div className='flex items-center size-4 h-full'>
        <span className='group-hover:hidden'>
          {index}
        </span>
        <Play className='size-4 hidden group-hover:block' />
      </div>
      <div className='flex items-center'>
        <Image
          src={thumbnail}
          alt='album'
          width={40}
          height={40}
          className='mr-3 rounded-lg'
        />
        <div className='flex flex-col'>
          <span className='text-white hover:underline'>
            {title}
          </span>
          <span className='text-sm text-zinc-400 group-hover:text-white hover:underline'>
            {artist}
          </span>
        </div>
      </div>
      <div className='flex items-center text-sm text-zinc-400 group-hover:text-white'>
        <span className='hover:underline'>
          {album}
        </span>
      </div>
      <div className='flex items-center gap-3 justify-end text-zinc-400'>
        <button className='hover:text-white hover:scale-x-110 transition-transform opacity-0 group-hover:opacity-100'>
          <Heart className='size-4' />
        </button>
        <span>{duration.text}</span>
        <button className='group-hover:text-white opacity-0 group-hover:opacity-100'>
          <Ellipsis className='size-4' />
        </button>
      </div>
    </div>
  )
}
