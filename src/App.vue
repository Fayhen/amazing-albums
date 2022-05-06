<template>
  <div class="flex flex-col">
    <div class="absolute w-full h-96 -mt-16 z-0 bg-neutral-800"></div>

    <CurrentAlbum
      v-if="!store.loadingCurrentAlbum"
      class="z-10 w-11/12 mx-auto"
    />

    <CurrentAlbumSkeleton
      v-else
      class="z-10 w-11/12 mx-auto"
    />

    <div
      v-if="store.loadingAlbumList"
      class="z-10 my-20"
    >
      <h1 class="font-sans text-2xl mb-20">Loading latest albums...</h1>
    </div>

    <div
      v-else-if="!store.loadingAlbumList && store.albumList.length === 0"
      class="z-10 my-20"
    >
      <h1 class="font-sans text-2xl mb-20">No albums to show</h1>
    </div>

    <div
      v-else
      class="z-10 my-20"
    >
      <h1 class="font-sans text-2xl mb-20">Recently added:</h1>
      <AlbumList class="w-11/12 mx-auto" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { loadAlbums } from './services/firestore'
import { useStore } from './stores/albums'
import AlbumList from '@/components/AlbumList.vue'
import CurrentAlbum from '@/components/CurrentAlbum.vue'
import CurrentAlbumSkeleton from '@/components/CurrentAlbumSkeleton.vue'

loadAlbums()
const store = useStore()
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
