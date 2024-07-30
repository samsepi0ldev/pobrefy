import { Heart } from 'iconsax-react'
import Image from 'next/image'

export function PlayingSongCard () {
  return (
    <div className='flex items-center gap-x-2.5 w-fit'>
      <Image
        src='https://img.freepik.com/vetores-gratis/padrao-sem-emenda-de-grunge-com-caveiras_225004-1117.jpg?t=st=1722115787~exp=1722119387~hmac=98cc8208eecafe8c78a806463348ee8b467bd6d971b4ca4a101e9908d629a8e2&w=826'
        alt='album'
        width={64}
        height={64}
        className='rounded-lg'
      />
      <div className='grid place-content-center'>
        <div className='flex items-center gap-x-2'>
          <span className='text-sm text-white'>Angels</span>
          <button className='text-white'>
            <Heart className='size-4' />
          </button>
        </div>
        <span className='text-sm text-zinc-400'>The XX</span>
        <span className='text-xs text-zinc-400 text-nowrap'>Tocando do: Streaming</span>
      </div>
    </div>
  )
}
