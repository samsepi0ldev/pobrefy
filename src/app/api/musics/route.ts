import { Innertube } from 'youtubei.js'
import { Root } from './yt'
import { NextRequest } from 'next/server'

export async function GET (request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = decodeURI(searchParams.get('search')!).toLowerCase()!

  const yt = await Innertube.create()

  const { contents } = await yt.music.search(query, {
    type: 'song'
  }) as unknown as Root


    const data = {
      songs: contents[0].contents.map(({ id, artists, title, thumbnail, album, duration }) => ({
        id,
        title,
        artist: artists[0]?.name,
        thumbnail: thumbnail.contents[0].url,
        album: album.name,
        duration
      })),
      continuation: contents[0].continuation,
    }

  return Response.json(data)
}
