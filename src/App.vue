<template>
  <div class="flex flex-col">
    <div class="absolute w-full h-96 -mt-16 z-0 bg-neutral-800"></div>

    <CurrentAlbum class="z-10 w-11/12 mx-auto mb-16" />

    <Suspense>
      <div class="z-10 ">
        <h1 class="font-sans text-2xl mb-2">Latest albums:</h1>
        <AlbumList class="w-11/12 mx-auto mb-16" />
      </div>

      <template #fallback>
        <p class="z-10 ">
          Loading latest albums...
        </p>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import AlbumList from './components/AlbumList.vue'
import CurrentAlbum from './components/CurrentAlbum.vue'
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
