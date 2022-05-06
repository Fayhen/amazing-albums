import { collection, getDocs, QuerySnapshot, DocumentData, query, orderBy, doc, getDoc } from 'firebase/firestore'
import { db } from '@/boot/firebase'
import { AlbumData, AlbumDataForRender } from '@/services/models'
import { useStore } from '@/stores/albums'

const albumsRef = collection(db, 'amazing-albums')
const artistsRef = collection(db, 'amazing-albums-artists')
const featuredAlbumRef = doc(albumsRef, 'tubes')

const latestAlbumsQuery = query(albumsRef, orderBy('created', 'desc'))

export async function fetchAlbums (): Promise<AlbumDataForRender[] | []> {
  try {
    const albumsQuery = await getDocs(albumsRef)

    if (!albumsQuery.empty) {
      const albumList = albumsQuery.docs

      const parsedAlbums = albumList.map((album) => {
        const rawData = album.data() as AlbumData
        const parsedData: AlbumDataForRender = {
          ...rawData,
          showInfo: false,
          ariaLabel: `Cover art of the album ${rawData.albumName}, by ${rawData.artist}`
        }

        return parsedData
      })

      return parsedAlbums
    } else {
      return []
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function fetchLatestAlbums (): Promise<AlbumData[]> {
  try {
    const latestAlbums = await getDocs(latestAlbumsQuery)

    const albums: AlbumData[] = latestAlbums.docs.map((album) => {
      return album.data() as AlbumData
    })

    return albums
  } catch (error) {
    console.log(error)
    throw error
  }
}

export async function fetchFeaturedAlbum (): Promise<AlbumDataForRender | undefined> {
  try {
    const featuredAlbum = await getDoc(featuredAlbumRef)

    if (featuredAlbum.exists()) {
      const rawData = featuredAlbum.data() as AlbumData
      const parsedData = {
        ...rawData,
        showInfo: false,
        ariaLabel: `Cover art of the album ${rawData.albumName}, by ${rawData.artist}`
      }

      return parsedData
    } else return undefined
  } catch (error) {
    console.log(error)
    throw error
  }
}

export async function fetchArtists (): Promise<QuerySnapshot<DocumentData> | undefined> {
  try {
    const artistsQuery = await getDocs(artistsRef)
    return artistsQuery
  } catch (error) {
    console.error(error)
  }
}

export async function loadAlbums (): Promise<void> {
  try {
    const store = useStore()
    const { albumList, currentAlbum, featuredAlbum, lastFetched } = store

    if (currentAlbum === null || currentAlbum === undefined) {
      store.loadingCurrentAlbum = true
    }

    if (albumList.length === 0) {
      const albums = await fetchAlbums()
      store.albumList = albums
    }

    if (featuredAlbum === null || featuredAlbum === undefined) {
      const featuredAlbum = await fetchFeaturedAlbum()
      store.featuredAlbum = featuredAlbum
    }

    if (currentAlbum === null || currentAlbum === undefined) {
      store.currentAlbum = store.featuredAlbum
      store.loadingCurrentAlbum = false
    }

    if (lastFetched === null || lastFetched === undefined) {
      if (store.albumList.length === 0) store.lastFetched = null
      else store.lastFetched = store.albumList[store.albumList.length - 1]
    }
  } catch (error) {
    console.log(error)
    throw error
  }
}
