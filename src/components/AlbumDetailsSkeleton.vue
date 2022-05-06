<template>
  <div id="album-info" class="w-full flex flex-col space-y-2 justify-center">
    <div class="h-5 w-48 mx-auto bg-slate-500 animate-pulse" />
    <div class="h-5 w-48 mx-auto bg-slate-500 animate-pulse" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AlbumDetailsSkeleton'
})
</script>
