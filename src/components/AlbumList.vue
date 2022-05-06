<template>
  <div
    id="album-list-wrapper"
    class="flex flex-wrap gap-8 justify-center"
  >
    <div
      v-for="album in albums.albumList" :key="album.albumCover"
      class="transform transition duration-500 hover:scale-110 cursor-pointer"
      @click="changeAlbum(album)"
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
import { defineComponent } from 'vue'
import { useStore } from '@/stores/albums'
import { changeCurrentAlbum } from '@/services/firestore'
import { AlbumDataForRender } from '@/services/models'
import AlbumCaption from './AlbumCaption.vue'
import AlbumCover from '@/components/AlbumCover.vue'

export default defineComponent({
  name: 'AlbumList',

  components: {
    AlbumCaption,
    AlbumCover
  },

  setup () {
    const albums = useStore()

    function changeAlbum (newAlbum: AlbumDataForRender) {
      changeCurrentAlbum(newAlbum)
    }

    return {
      albums,
      changeAlbum
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
