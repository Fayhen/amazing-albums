<template>
  <div class="absolute -translate-y-12 w-full flex flex-col justify-center">
    <p>{{ albumName }}</p>
    <p>{{ artist }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AlbumTooltip',

  props: {
    albumName: {
      type: String,
      required: true
    },
    artist: {
      type: String,
      required: true
    }
  }
})
</script>
