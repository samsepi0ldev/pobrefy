import colors from 'tailwindcss/colors'
import { Disc3, FolderSearch, LibraryBig, Music, Sparkles, UsersRound } from 'lucide-react'

import { Link } from '@/components/link'
 
export function SideMenu () {
  return (
    <aside className='bg-zinc-900 grid-in-nav px-3 overflow-y-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-zinc-800 active:scrollbar-thumb-zinc-700'>
      <div className='flex items-center justify-center gap-x-4 mt-6'>
        <svg width="26" height="32" viewBox="0 0 78 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 17C0 13.134 3.13401 10 7 10V10C10.866 10 14 13.134 14 17V83C14 86.866 10.866 90 7 90V90C3.13401 90 0 86.866 0 83V17Z" fill="white"/>
          <path d="M22 7C22 3.13401 25.134 0 29 0V0C32.866 0 36 3.13401 36 7V33C36 36.866 32.866 40 29 40V40C25.134 40 22 36.866 22 33V7Z" fill="white"/>
          <path d="M22 53C22 49.134 25.134 46 29 46V46C32.866 46 36 49.134 36 53V89C36 92.866 32.866 96 29 96V96C25.134 96 22 92.866 22 89V53Z" fill="white"/>
          <path d="M43 44C43 40.134 46.134 37 50 37V37C53.866 37 57 40.134 57 44V83C57 86.866 53.866 90 50 90V90C46.134 90 43 86.866 43 83V44Z" fill="white"/>
          <path d="M64 41C64 37.134 67.134 34 71 34V34C74.866 34 78 37.134 78 41V62C78 65.866 74.866 69 71 69V69C67.134 69 64 65.866 64 62V41Z" fill="white"/>
          <path d="M43 13C43 9.13401 46.134 6 50 6V6C53.866 6 57 9.13401 57 13V23C57 26.866 53.866 30 50 30V30C46.134 30 43 26.866 43 23V13Z" fill="white"/>
        </svg>
        <h1 className='text-white text-lg font-semibold'>Pobrefy</h1>
      </div>

      <div className='flex flex-col mt-8'>
        <Link href='/'>
          <Sparkles className='size-4' />
          Escolhas rápidas
        </Link>
        <Link href='/musics'>
          <Music className='size-4' />
          Musicas
        </Link>
        <Link href='/artists'>
          <UsersRound className='size-4' />
          Artistas
        </Link>
        <Link href='/albums'>
          <Disc3 className='size-4' />
          Álbuns
        </Link>
        <Link href='/playlists'>
          <LibraryBig className='size-4' />
          Playlists
        </Link>
        <Link href='/playlists'>
          <FolderSearch className='size-4' />
          Musicas locais
        </Link>

        <div className='mt-8'>
          <span className='text-xs font-medium text-zinc-500 uppercase'>Minhas playlists</span>
          <Link href='/playlists'>
            Mixes and Radio
          </Link>
          <Link href='/playlists'>
            September
          </Link>
          <Link href='/playlists'>
            Clubbing
          </Link>
          <Link href='/playlists'>
            Chil story2
          </Link>
          <Link href='/playlists'>
            Playlist 342
          </Link>
        </div>
      </div>
    </aside>
  )
}
