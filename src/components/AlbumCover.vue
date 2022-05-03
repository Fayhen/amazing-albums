<template>
  <img
    :src="albumCover"
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
    }
  }
})
</script>
