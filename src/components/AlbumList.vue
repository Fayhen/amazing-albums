<template>
  <div
    id="album-list-wrapper"
    class="flex flex-wrap gap-8 justify-center"
  >
    <div
      v-for="album in albums" :key="album.albumCover"
      class="transform transition duration-500 hover:scale-110"
      @mouseenter="album.showInfo = true"
      @mouseleave="album.showInfo = false"
    >
      <Transition>
        <AlbumCaption
          v-if="album.showInfo"
          :albumName="album.albumName"
          :artist="album.artist"
        />
      </Transition>

      <AlbumCover
        :albumCover="album.albumCover"
        :ariaLabel="album.ariaLabel"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import { getLatestAlbums } from '@/services/firestore'
import { AlbumDataForRender } from '@/services/models'
import AlbumCaption from './AlbumCaption.vue'
import AlbumCover from '@/components/AlbumCover.vue'

export default defineComponent({
  name: 'AlbumList',

  components: {
    AlbumCaption,
    AlbumCover
  },

  async setup () {
    const rawAlbumData = await getLatestAlbums()
    const showInfo = ref(false)

    const albums: Ref<AlbumDataForRender[]> = ref(rawAlbumData.map((album) => {
      const parsedAlbum: AlbumDataForRender = {
        ...album,
        showInfo: false,
        ariaLabel: `Cover art of the album ${album.albumName}, by ${album.artist}`
      }
      return parsedAlbum
    }))

    return {
      albums,
      showInfo
    }
  }
})
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
