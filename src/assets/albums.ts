export interface BandcampAlbumData {
  albumName: string
  albumUrl: string
  albumCaption: string
  artist: string
  iframeSrc: string
}

export const albums: Record<string, BandcampAlbumData[]> = {
  mcbaise: [
    {
      albumName: 'TUBES',
      albumUrl: 'TUBES by mcbaise',
      albumCaption: 'https://mcbaise.com/album/tubes',
      artist: 'mcbaise',
      iframeSrc: 'https://bandcamp.com/EmbeddedPlayer/album=2372009155/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/'
    }
  ]
}