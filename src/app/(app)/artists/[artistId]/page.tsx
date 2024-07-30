import { DiscAlbum, LibraryBig, MicVocal, Music } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/button'

export default function ArtistDashboard ({ params }: {
  params: { artistId: string }
}) {
  return (
    <div className='px-8'>
      <div className='flex items-center mb-2'>
        <Button variant='ghost'>
          <Music className='size-4' />
          Musicas
        </Button>
        <Button variant='ghost' >
          <DiscAlbum className='size-4' />
          Albums
        </Button>
        <Button variant='ghost'>
          <LibraryBig className='size-4' />
          Biblioteca
        </Button>
      </div>
      <div className='relative h-96'>
        <Image
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQdlh5pzZK7Yj0CxAoOYH-OYdtFWFu6REoPHD6AH_RiRFi28Ec'
          alt='Pink Floyd'
          fill={true}
          className='object-cover z-10 rounded-lg'
        />
        <div className='z-50 h-28 absolute bottom-0 left-0 right-0 bg-gradient-to-b to-black from-black/5 flex items-end justify-center'>
          <h1 className='text-3xl font-semibold'>Pink Floyd</h1>
        </div>
      </div>
      <span className='text-center block w-full mt-2'>4.16M Inscritos</span>
      
    </div>
  )
}
