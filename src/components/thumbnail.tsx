import Image from 'next/image'

export function Thumbnail () {
  return (
    <div className='w-52 h-auto'>
      <Image
        src='https://img.freepik.com/vetores-gratis/padrao-sem-emenda-de-grunge-com-caveiras_225004-1117.jpg?t=st=1722115787~exp=1722119387~hmac=98cc8208eecafe8c78a806463348ee8b467bd6d971b4ca4a101e9908d629a8e2&w=826'
        alt='album'
        className='object-cover rounded'
        width={200}
        height={200}
      />
      <div className='mt-4 flex flex-col gap-1 text-sm font-semibold'>
        <span className='text-white truncate'>
          Blood Sugar Sex Magik (Deluxe Edition)
        </span>
        <span className='text-zinc-500'>
          Red Hot Chili Peppers
        </span>
        <span className='text-zinc-500 uppercase text-[0.625rem]'>
          LABEL
        </span>
      </div>
    </div>
  )
}
