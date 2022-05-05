<template>
  <div
    id="current-album"
    class="flex p-1 space-x-3 rounded-lg overflow-hidden bg-slate-200"
  >
    <AlbumPlayer
      :albumCaption="album.albumCaption"
      :albumUrl="album.albumUrl"
      :albumName="album.albumName"
      :artist="album.artist"
      :iframe-src="album.iframeSrc"
    />

    <AlbumDetails
      :albumCaption="album.albumCaption"
      :artist="album.artist"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { albums } from '@/assets/albums'
import AlbumDetails from '@/components/AlbumDetails.vue'
import AlbumPlayer from '@/components/AlbumPlayer.vue'

export default defineComponent({
  name: 'CurrentAlbum',

  components: {
    AlbumDetails,
    AlbumPlayer
  },

  setup () {
    const album = albums.mcbaise[0]

    return {
      album
    }
  }
})
</script>
