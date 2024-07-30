import colors from 'tailwindcss/colors'
import { Disc3, FolderSearch, LibraryBig, Music, Sparkles, UsersRound } from 'lucide-react'

import { Link } from '@/components/link'
 
export function SideMenu () {
  return (
    <aside className='bg-zinc-900 grid-in-nav px-3 overflow-y-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-zinc-800 active:scrollbar-thumb-zinc-700'>
      <div className='flex items-center justify-center gap-x-4 mt-6'>
        <svg fill={colors.violet[500]} height='32px' width='32px' version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 511.995 511.995'>
          <g>
            <g>
              <g>
                <path d='M511.907,362.922c-0.96-15.317-9.685-28.715-23.275-35.819l-125.973-49.899c-25.771,27.989-59.968,34.944-103.552,34.944
                    c-50.176,0-88.32-8.96-109.781-34.944L24.269,326.698l-2.347,1.152c-12.715,7.275-20.864,20.331-21.824,34.923
                    c-0.981,14.592,5.397,28.587,17.024,37.461l215.061,104.213c7.36,4.949,15.829,7.445,24.32,7.445
                    c8.043,0,16.107-2.24,23.232-6.741l210.709-102.08l2.859-1.685C505.933,392.64,512.867,378.24,511.907,362.922z M259.875,467.37
                    l-3.925,1.643L42.573,365.61l78.037-32.939c0.192,1.28,0.597,2.496,0.875,3.755c0.192,0.832,0.363,1.621,0.576,2.453
                    c1.173,4.331,2.773,8.512,4.864,12.48c0.363,0.704,0.789,1.344,1.173,2.005c2.325,4.011,4.971,7.808,8.213,11.179
                    c0.064,0.064,0.085,0.128,0.149,0.192c5.973,6.187,12.949,11.584,20.885,16.256c0.064,0.043,0.128,0.107,0.213,0.149
                    c2.752,1.6,5.76,2.987,8.747,4.416c1.365,0.661,2.603,1.429,4.032,2.048c1.963,0.853,4.117,1.515,6.165,2.304
                    c2.667,1.003,5.248,2.112,8.085,3.008c1.067,0.341,2.283,0.555,3.392,0.896c3.989,1.152,8,2.304,12.288,3.221
                    c8.875,1.92,18.539,3.179,28.672,4.053c8.597,0.768,17.472,1.28,26.944,1.28c55.104,0,95.275-12.672,119.467-37.653
                    c3.563-3.669,6.528-7.808,8.981-12.203c0.789-1.429,1.173-3.008,1.856-4.48c1.28-2.859,2.752-5.675,3.584-8.704l79.637,26.091
                    L259.875,467.37z'/>
                <path d='M255.896,170.235c27.627,0,54.379-11.2,64.597-16l2.56-1.024l21.013-6.741l-12.779-44.821l-25.259,11.52
                    c-14.165,4.459-30.229,9.515-50.133,9.515c-23.189,0-37.824-5.056-53.355-10.411l-6.059-2.261l-16.107-7.829l-11.136,39.04
                    l23.979,14.699C210.627,165.051,232.728,170.235,255.896,170.235z'/>
                <path d='M259.105,269.476c38.571,0,66.56-14.891,78.805-27.627l1.707-1.621l25.195-21.013l-9.045-31.701l-18.368,5.909
                    c-16.32,7.552-47.488,19.477-81.493,19.477c-30.08,0-59.051-6.891-83.776-19.904l-15.019-9.216l-9.643,33.792l28.352,24.619
                    C185.931,255.332,216.331,269.476,259.105,269.476z'/>
                <path d='M255.896,80.017c13.355,0,24.448-3.499,37.312-7.552l4.992-1.536l21.013-10.005c-3.904-11.413-8.149-21.845-12.8-30.485
                    c-10.048-18.752-29.525-30.336-50.923-30.336h-0.341c-21.419,0.128-40.789,11.904-50.603,30.741
                    c-4.395,8.448-8.299,18.56-11.883,29.589l23.765,11.499C230.552,76.795,239.875,80.017,255.896,80.017z'/>
              </g>
            </g>
          </g>
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
