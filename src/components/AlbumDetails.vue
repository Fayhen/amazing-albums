
<template>
  <div id="album-info" class="w-full flex flex-col justify-center">
    <p>{{ albumCaption }}</p>
    <p>{{ artist }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AlbumInfo',
  props: {
    albumCaption: {
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
