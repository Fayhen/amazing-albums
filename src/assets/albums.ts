export interface albumData {
  albumCaption: string
  albumCover: string
  albumName: string
  albumUrl: string
  artist: string
  artistId: string
  created: string
  iframeSrc: string
  releaseDate: string
  views: number
}

export const albums: Record<string, albumData[]> = {
  mcbaise: [
    {
      albumCaption: 'TUBES by mcbaise',
      albumCover: 'https://f4.bcbits.com/img/a1181416675_16.jpg',
      albumName: 'TUBES',
      albumUrl: 'https://mcbaise.com/album/tubes',
      artist: 'mcbaise',
      artistId: 'mcbaise',
      created: '',
      iframeSrc: 'https://bandcamp.com/EmbeddedPlayer/album=2372009155/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/',
      releaseDate: '',
      views: 0
    }
  ]
}
