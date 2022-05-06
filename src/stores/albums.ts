import { defineStore } from 'pinia'
import { AlbumState } from '@/services/models'

export const useStore = defineStore('albums', {
  state: (): AlbumState => ({
    albumList: [],
    currentAlbum: undefined,
    featuredAlbum: undefined,
    lastFetched: null
  })
})
