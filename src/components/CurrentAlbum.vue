<template>
  <div
    id="current-album"
    class="flex p-1 space-x-3 rounded-lg overflow-hidden bg-slate-200"
  >
    <AlbumPlayer
      :albumCaption="store.currentAlbum.albumCaption"
      :albumUrl="store.currentAlbum.albumUrl"
      :albumName="store.currentAlbum.albumName"
      :artist="store.currentAlbum.artist"
      :iframe-src="store.currentAlbum.iframeSrc"
    />

    <AlbumDetails
      :albumCaption="store.currentAlbum.albumCaption"
      :artist="store.currentAlbum.artist"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/stores/albums'
import AlbumDetails from '@/components/AlbumDetails.vue'
import AlbumPlayer from '@/components/AlbumPlayer.vue'

export default defineComponent({
  name: 'CurrentAlbum',

  components: {
    AlbumDetails,
    AlbumPlayer
  },

  setup () {
    const store = useStore()

    return {
      store
    }
  }
})
</script>
