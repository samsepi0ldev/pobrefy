import { Innertube } from 'youtubei.js'
import { Root } from './yt'
import { NextRequest } from 'next/server'

export async function GET (request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = decodeURI(searchParams.get('search')!)

  const yt = await Innertube.create()

  const { contents } = await yt.music.search(query!, {
    type: 'artist'
  }) as unknown as Root

  const data = {
    artists: contents[0].contents.map(({ id, name, subscribers, thumbnail }) => ({
      id ,
      name,
      subscribers,
      thumbnail: thumbnail.contents[0].url,
    })),
    continuation: contents[0].continuation
  }

  return Response.json(data)
}
