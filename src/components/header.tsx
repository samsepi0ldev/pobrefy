'use client'

import { ChevronLeft, ChevronRight, Search } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/button'
import { ChangeEvent, useEffect, useState } from 'react'

export function Header () {
  const [inputSearch, setInputSearch] = useState('')

  const router = useRouter()

  function handleInputChange (event: ChangeEvent<HTMLInputElement>) {
    setInputSearch(event.target.value)
  }

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      const param = encodeURI(inputSearch)

      if (inputSearch !== '') {
        router.push(`/search/${param}`)
      }

    }, 500)

    return () => clearTimeout(delayInputTimeoutId)
  }, [inputSearch, router])

  return (
    <header className='grid-in-header px-14 flex justify-between'>
        <div className='flex items-center gap-2 h-full'>
          <Button size='icon'>
            <ChevronLeft className='size-4 flex-shrink-0' />
          </Button>
          <Button size='icon'>
            <ChevronRight className='size-4 flex-shrink-0' />
          </Button>
        </div>

        <label className='w-80 h-10 flex items-center gap-x-2.5 bg-zinc-900 rounded-lg border border-zinc-800 px-2.5 self-end mb-2'>
          <Search className='size-4' />
          <input
            type='text'
            className='flex-1 outline-none bg-transparent text-sm placeholder-zinc-200 text-zinc-50'
            placeholder='Buscar'
            onChange={handleInputChange}
          />
        </label>
      </header>
  )
}
