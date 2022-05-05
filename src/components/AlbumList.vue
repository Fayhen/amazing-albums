<template>
  <div id="album-list-wrapper" class="flex flex-wrap gap-8 justify-center">
    <AlbumCover
      v-for="album in albums" :key="album.albumCover"
      :albumCover="album.albumCover"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import { getLatestAlbums } from '@/services/firestore'
import { AlbumData } from '@/services/models'
import AlbumCover from '@/components/AlbumCover.vue'

export default defineComponent({
  name: 'AlbumList',

  components: {
    AlbumCover
  },

  async setup () {
    const albums: Ref<AlbumData[]> = ref(await getLatestAlbums())
    return {
      albums
    }
  }
})
</script>
