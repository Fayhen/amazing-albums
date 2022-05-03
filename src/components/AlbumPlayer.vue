<template>
  <div id="iframe-wrapper" class="shrink-0 rounded-lg overflow-hidden">
    <iframe
      seamless
      style="border:0; width: 350px; height: 470px;"
      :src="iframeSrc"
    >
      <a :href="albumUrl">
        {{ albumCaption }}
      </a>
    </iframe>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'BandcampPlayer',

  props: {
    albumName: {
      type: String,
      required: true
    },
    albumUrl: {
      type: String,
      required: true
    },
    albumCaption: {
      type: String,
      required: true
    },
    artist: {
      type: String,
      required: true
    },
    iframeSrc: {
      type: String,
      required: true
    }
  },

  setup () {
    onMounted(() => {
      const player: HTMLAudioElement = document.getElementsByTagName('audio')[0]

      player.addEventListener('onplaying', () => {
        console.log('Playing song!')
      })
    })
  }
})
</script>
