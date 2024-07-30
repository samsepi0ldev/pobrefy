import { Innertube } from 'youtubei.js'
import { Root } from './yt'
import { NextRequest } from 'next/server'

export async function GET (request: Request, { params }: { params: { id: string } }) {

  const yt = await Innertube.create()

  const response = await yt.music.getArtist(params.id)

  // const data = {
  //   artists: contents[0].contents.map(({ id, name, subscribers, thumbnail }) => ({
  //     id ,
  //     name,
  //     subscribers,
  //     thumbnail: thumbnail.contents[0].url,
  //   })),
  //   continuation: contents[0].continuation
  // }

  return Response.json(response)
}
