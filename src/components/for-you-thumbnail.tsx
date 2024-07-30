import { Play } from 'lucide-react'
import Image from 'next/image'

export function ForYouThumbnail () {
  return (
    <div className='relative w-64 h-96 flex rounded-lg overflow-hidden shadow-xl shadow-black'>
      <Image
        src='https://img.freepik.com/vetores-gratis/padrao-sem-emenda-de-grunge-com-caveiras_225004-1117.jpg?t=st=1722115787~exp=1722119387~hmac=98cc8208eecafe8c78a806463348ee8b467bd6d971b4ca4a101e9908d629a8e2&w=826'
        alt='album'
        className='object-cover'
        fill={true}
      />
      <div className='relative w-full self-end h-28 bg-zinc-950/50 backdrop-blur-lg flex flex-col justify-center px-3.5 py-4'>
        <button className='size-10 rounded-full bg-white flex items-center justify-center absolute right-4 top-0 -translate-y-1/2'>
          <Play className='size-4 text-zinc-950' />
        </button>
        <span className='uppercase text-xs text-teal-500 font-semibold mb-2 leading-tight'>
          New For You
        </span>
        <span className='text-lg text-white font-semibold leading-tight'>
          My New Arrivals
        </span>
        <p className='text-sm text-zinc-500 font-semibold mt-1 leading-tight'>
          Deine Freunde, Moderat, Sebastián Yatra and more
        </p>
      </div>
    </div>
  )
}
