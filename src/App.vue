<template>
  <div class="flex flex-col">
    <BandcampPlayer
      v-for="album in albums.mcbaise" :key="album.albumName"
      :album-caption="album.albumCaption"
      :album-url="album.albumUrl"
      :album-name="album.albumName"
      :artist="album.artist"
      :iframe-src="album.iframeSrc"
    />
  </div>
</template>

<script setup lang="ts">
import { albums } from './assets/albums'
import BandcampPlayer from './components/BandcampPlayer.vue'
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
