<template>
  <div
    id="iframe-wrapper-skeleton"
    class="shrink-0 rounded-lg overflow-hidden bg-slate-800 animate-pulse"
  >
    <div
      class="bg-slate-800"
      style="border:0; width: 350px; height: 470px;"
    >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AlbumPlayerSkeleton'
})
</script>
