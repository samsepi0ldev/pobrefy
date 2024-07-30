import { Clock } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/tooltip'
import { api } from '@/lib/api'
import { MusicRow } from '@/components/music-row'

export interface Request {
  songs: Song[]
  continuation: string
}

export interface Song {
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

export default async function SearchSong ({ params }: { params: { name: string } }) {
  const name = decodeURI(params.name)
  const searchMusicData = await api.get<Request>(`/musics?search=${name}`)

  return (
    <div className='px-8 relative'>
      <div className='sticky top-0 left-0 right-0 grid grid-cols-[auto_4fr_2fr_1fr] grid-row-auto gap-4 text-sm text-zinc-400 border-b border-b-zinc-700 px-4 pb-2 mb-3'>
        <span>#</span>
        <span>Titulo</span>
        <span>Álbum</span>
        <div className='flex items-center justify-end'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Clock className='size-4 mr-8' />
              </TooltipTrigger>
              <TooltipContent sideOffset={8}>
                Duração
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div>
        {searchMusicData.data.songs.map((song, i) => (
          <MusicRow
            key={song.id}
            data={{
              ...song,
              index: ++i
            }}
          />
        ))}
      </div>
    </div>
  )
}
