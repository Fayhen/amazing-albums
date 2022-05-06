<template>
  <div
    id="current-album"
    class="flex p-1 space-x-3 rounded-lg overflow-hidden bg-slate-200"
  >
    <AlbumPlayerSkeleton />

    <AlbumDetailsSkeleton />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AlbumDetailsSkeleton from './AlbumDetailsSkeleton.vue'
import AlbumPlayerSkeleton from './AlbumPlayerSkeleton.vue'

export default defineComponent({
  name: 'CurrentAlbumSkeleton',

  components: {
    AlbumDetailsSkeleton,
    AlbumPlayerSkeleton
  }
})
</script>
