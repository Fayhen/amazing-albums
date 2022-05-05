import { collection, getDocs, QuerySnapshot, DocumentData, query, orderBy } from 'firebase/firestore'
import { db } from '@/boot/firebase'
import { AlbumData } from '@/services/models'

const albumsRef = collection(db, 'amazing-albums')
const artistsRef = collection(db, 'amazing-albums-artists')

const latestAlbumsQuery = query(albumsRef, orderBy('created', 'desc'))

export async function getAlbums (): Promise<QuerySnapshot<DocumentData> | undefined> {
  try {
    const albumsQuery = await getDocs(albumsRef)
    // albumsQuery.forEach((doc) => {
    //   console.log(doc.data())
    // })
    return albumsQuery
  } catch (error) {
    console.error(error)
  }
}

export async function getLatestAlbums (): Promise<AlbumData[]> {
  try {
    const latestAlbums = await getDocs(latestAlbumsQuery)

    // const albums: AlbumData[] = latestAlbums.map()
    const albums: AlbumData[] = latestAlbums.docs.map((album) => {
      return album.data() as AlbumData
    })

    console.log(albums)
    return albums
  } catch (error) {
    console.log(error)
    throw error
  }
}

export async function getArtists (): Promise<QuerySnapshot<DocumentData> | undefined> {
  try {
    const artistsQuery = await getDocs(artistsRef)
    // artistsQuery.forEach((doc) => {
    //   console.log(doc.data())
    // })
    return artistsQuery
  } catch (error) {
    console.error(error)
  }
}
