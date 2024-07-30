'use client'

// import { Download, Shuffle, SkipBack, Play, SkipForward, Repeat, ListPlus, Volume2, Menu, RefreshCcw, SquareArrowOutUpRight } from 'lucide-react'
import { Download, ListPlus, SquareArrowOutUpRight } from 'lucide-react'
import { useState } from 'react'
import NextLink from 'next/link'
import { Play, Pause, Shuffle, Repeat, Next, Previous, VolumeHigh, Refresh, HambergerMenu } from 'iconsax-react'

import { PlayingSongCard } from '@/components/playing-song-card'
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@/components/tooltip'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/popover'
import { Link } from './link'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from './dialog'
import { Button } from './button'

export function Footer () {
  const [shuffle, setShuffle] = useState(false)
  const [repeater, setRepeater] = useState(false)

  return (
    <footer className='bg-zinc-900 border-t border-t-zinc-800 grid-in-footer px-4 py-3.5 flex items-center justify-between gap-28'>
      <PlayingSongCard />

      <div className='flex flex-col w-full items-center justify-between gap-2'>
        <div className='flex items-center justify-center'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className='size-9 rounded-full text-zinc-500 hover:bg-zinc-800 flex items-center justify-center transition-colors data-[active=true]:text-violet-500'
                  data-active={true}
                >
                  <Download className='size-4' />
                </button>
              </TooltipTrigger>
              <TooltipContent sideOffset={8}>
                Baixa/Remover a musica
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => setShuffle(!shuffle)}
                  className='size-9 rounded-full text-zinc-500 hover:bg-zinc-800 flex items-center justify-center transition-colors data-[active=true]:text-violet-500'
                  data-active={shuffle}
                >
                  <Shuffle className='size-4' />
                </button>
              </TooltipTrigger>
              <TooltipContent sideOffset={8}>
                Ativar ordem aleatória
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <button className='size-9 rounded-full hover:bg-zinc-800 flex items-center justify-center transition-colors'>
                  <Previous variant='Bold' className='size-4' />
                </button>
              </TooltipTrigger>
              <TooltipContent sideOffset={8}>
                Voltar para musica anterior
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <button className='size-9 rounded-full bg-white flex items-center justify-center transition-colors'>
                  <Play variant='Bold' className='size-6 text-zinc-950' />
                </button>
              </TooltipTrigger>
              <TooltipContent sideOffset={8}>
                Tocar/Pausar musica
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <button className='size-9 rounded-full hover:bg-zinc-800 flex items-center justify-center transition-colors'>
                  <Next variant='Bold' className='size-4' />
                </button>
              </TooltipTrigger>
              <TooltipContent sideOffset={8}>
                Ir para proxima musica
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => setRepeater(!repeater)}
                  className='size-9 rounded-full text-zinc-500 hover:bg-zinc-800 flex items-center justify-center transition-colors data-[active=true]:text-violet-500'
                  data-active={repeater}
                >
                  <Repeat className='size-4' />
                </button>
              </TooltipTrigger>
              <TooltipContent sideOffset={8}>
                Ativar repetição
              </TooltipContent>
            </Tooltip>

            
          </TooltipProvider>

          <Popover>
            <PopoverTrigger asChild>
              <button
                className='size-9 rounded-full text-zinc-50 hover:bg-zinc-800 flex items-center justify-center transition-colors data-[active=true]:text-white'
              >
                <ListPlus className='size-4' />
              </button>
            </PopoverTrigger>
            <PopoverContent
              side='top'
              sideOffset={26}
              align='center'
              className='flex flex-col p-1.5'
            >
              <button className='flex items-center gap-2 text-xs hover:bg-zinc-900 px-2 py-1.5 rounded transition-colors'>
                <Refresh className='size-4 flex-shrink-0' />
                Atualizar titulo
              </button>
              <Dialog>
                <DialogTrigger asChild>
                  <button className='flex items-center gap-2 text-xs hover:bg-zinc-900 px-2 py-1.5 rounded transition-colors'>
                    <ListPlus className='size-4 flex-shrink-0' />
                    Adicionar a playlist
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <div className='flex items-center gap-4'>
                    <DialogTitle>
                      Adicionar musica a playlist
                    </DialogTitle>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size='xs' className='text-xs font-medium'>
                          Nova playlist
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        oi
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className='mt-4'>
                    <div className='flex items-center justify-between px-4 py-2.5 rounded hover:bg-zinc-800/50 transition-colors'>
                      <button className='flex items-center gap-4 text-sm'>
                        <ListPlus className='size-4' />
                        <div className='flex flex-col items-start justify-start'>
                          <span className='text-sm font-medium'>Mixes and Radio</span>
                          <span className='text-xs text-zinc-400'>4 musicas</span>
                        </div>
                      </button>
                      <NextLink href='/playlists/1'>
                        <SquareArrowOutUpRight className='size-4' />
                      </NextLink>
                    </div>
                    <div className='flex items-center justify-between px-4 py-2.5 rounded hover:bg-zinc-800/50 transition-colors'>
                      <button className='flex items-center gap-4 text-sm'>
                        <ListPlus className='size-4' />
                        <div className='flex flex-col items-start justify-start'>
                          <span className='text-sm font-medium'>Chill story</span>
                          <span className='text-xs text-zinc-400'>30 musicas</span>
                        </div>
                      </button>
                      <NextLink href='/playlists/1'>
                        <SquareArrowOutUpRight className='size-4' />
                      </NextLink>
                    </div>
                    <div className='flex items-center justify-between px-4 py-2.5 rounded hover:bg-zinc-800/50 transition-colors'>
                      <button className='flex items-center gap-4 text-sm'>
                        <ListPlus className='size-4' />
                        <div className='flex flex-col items-start justify-start'>
                          <span className='text-sm font-medium'>Clubbing</span>
                          <span className='text-xs text-zinc-400'>12 musicas</span>
                        </div> 
                      </button>
                      <NextLink href='/playlists/1'>
                        <SquareArrowOutUpRight className='size-4' />
                      </NextLink>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </PopoverContent>
          </Popover>

        </div>
        <div className='w-1/2 block h-1 bg-zinc-600 rounded-full' />
      </div>

      <div className='flex items-center gap-x-2'>
        <button className='size-11 rounded-full hover:bg-zinc-800 flex items-center justify-center transition-colors'>
          <VolumeHigh />
        </button>
        <Popover>
          <PopoverTrigger asChild>
            <button className='size-11 rounded-full hover:bg-zinc-800 flex items-center justify-center transition-colors'>
              <HambergerMenu />
            </button>
          </PopoverTrigger>
          <PopoverContent className='flex flex-col p-1.5' align='end' sideOffset={28}>
            <Link className='flex items-center gap-2 text-xs hover:bg-zinc-900 px-2 py-1.5 rounded transition-colors' href='/configure'>
              Configurações
            </Link>
            <Link className='flex items-center gap-2 text-xs hover:bg-zinc-900 px-2 py-1.5 rounded transition-colors' href='/about'>
              Sobre
            </Link>
          </PopoverContent>
        </Popover>
      </div>
    </footer>
  )
}
