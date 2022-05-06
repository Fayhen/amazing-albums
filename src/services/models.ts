/**
 * Album data stored in Firestore.
 */
export interface AlbumData {
  /**
   * Bandcamp's album caption used in their album player.
   */
  albumCaption: string
  /**
   * Bandcamp's URL address to the album cover art.
   */
  albumCover: string
  /**
   * Album's name.
   */
  albumName: string
  /**
   * Album's Bandcamp URL address.
   */
  albumUrl: string
  /**
   * Album's author.
   */
  artist: string
  /**
   * Album's author Firestore ID.
   */
  artistId: string
  /**
   * Timestamp of album's creation in Firestore.
   */
  created: string
  /**
   * Bandcamp's iframe `src` attribute used in their album player.
   */
  iframeSrc: string
  /**
   * Timestamp of album's release date.
   */
  releaseDate: string
  /**
   * Number of times this album was visualized on this site.
   */
  views: number
}

/**
 * Album data with additional properties for orchestration within
 * Vue components.
 */
export interface AlbumDataForRender extends AlbumData {
  /**
   * Whether or not to render an addition information component.
   */
  showInfo: boolean
  /**
   * Aria-label value for the album cover image.
   */
  ariaLabel: string
}

/**
 * Pinia state definition for Album data.
 */
export interface AlbumState {
  /**
   * Album list retrieved from Firestore.
   */
  albumList: AlbumDataForRender[]
  /**
   * Currently selected album.
   */
  currentAlbum: AlbumDataForRender | undefined
  /**
   * Featured album to be displayed on initial application load.
   */
  featuredAlbum: AlbumDataForRender | undefined
  /**
   * Last album retrieved from Firebase. Used for pagination.
   */
  lastFetched: AlbumDataForRender | null
  /**
   * True when the album list if being populated upon initial render
   * _I.e._, the list was previously empty and is currently being
   * populated with new data.
   */
  loadingAlbumList: boolean
  /**
   * True when the `CurrentAlbum.vue` component is in a loading
   * state. This happens during initial data fetch from Firestore
   * at application startup, or when a new album is selected by
   * the user.
   */
  loadingCurrentAlbum: boolean

}

/**
 * Artist data store in Firestore.
 */
export interface ArtistData {
  /**
   * Array of album IDs from this artist.
   */
  albums: string[]
  /**
   * Artist's Bandcamp link.
   */
  bandcamp: string
  /**
   * Artist's Facebook profile link, if any.
   */
  facebook: string | undefined
  /**
   * Artist's online site, if any.
   */
  homepage: string | undefined
  /**
   * Artist's Instagram link, if any.
   */
  instagram: string | undefined
  /**
   * Artist's name.
   */
  name: string
  /**
   * Artist's Twitch channel link, if any.
   */
  twitch: string
  /**
   * Artist's Twitter link, if any.
   */
  twitter: string | string
  /**
   * Artist's YouTube channel, if any.
   */
  youtube: string | undefined
}
