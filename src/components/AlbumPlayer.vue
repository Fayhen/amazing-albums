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
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AlbumPlayer',

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
  }
})
</script>
