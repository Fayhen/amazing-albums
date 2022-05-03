<template>
  <div id="album-list-wrapper" class="flex flex-wrap gap-8 justify-center" style="border: 1px solid brown;">
    <AlbumCover
      v-for="album in albums" :key="album.albumCover"
      :albumCover="album.albumCover"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AlbumCover from './AlbumCover.vue'

export default defineComponent({
  name: 'AlbumList',

  components: {
    AlbumCover
  },

  setup () {
    const albums = [
      {
        albumCover: 'https://f4.bcbits.com/img/a1181416675_16.jpg'
      },
      {
        albumCover: 'https://f4.bcbits.com/img/a1181416675_16.jpg'
      },
      {
        albumCover: 'https://f4.bcbits.com/img/a1181416675_16.jpg'
      },
      {
        albumCover: 'https://f4.bcbits.com/img/a1181416675_16.jpg'
      },
      {
        albumCover: 'https://f4.bcbits.com/img/a1181416675_16.jpg'
      }
    ]

    return {
      albums
    }
  }
})
</script>
