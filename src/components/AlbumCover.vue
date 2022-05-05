<template>
  <img
    :src="albumCover"
    :aria-label="ariaLabel"
    class="aspect-square w-80"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AlbumCover',

  props: {
    albumCover: {
      type: String,
      required: true
    },
    ariaLabel: {
      type: String,
      required: true,
      default: 'Album cover art'
    }
  }
})
</script>
