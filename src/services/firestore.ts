import { db } from '../boot/firebase'
import { collection, getDocs, QuerySnapshot, DocumentData } from 'firebase/firestore'

const albumsRef = collection(db, 'amazing-albums')
const artistsRef = collection(db, 'amazing-albums-artists')

export async function getAlbums (): Promise<QuerySnapshot<DocumentData> | undefined> {
  try {
    const albumsQuery = await getDocs(albumsRef)
    albumsQuery.forEach((doc) => {
      console.log(doc.data())
    })
    return albumsQuery
  } catch (error) {
    console.error(error)
  }
}

export async function getArtists (): Promise<QuerySnapshot<DocumentData> | undefined> {
  try {
    const artistsQuery = await getDocs(artistsRef)
    artistsQuery.forEach((doc) => {
      console.log(doc.data())
    })
    return artistsQuery
  } catch (error) {
    console.error(error)
  }
}
