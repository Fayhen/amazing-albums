<template>
  <button @click="toggleTheme('test')">Toggle blue</button>
  <button @click="toggleTheme('base')">Toggle base</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { applyTheme } from "../assets/themes/utils";

export default defineComponent({
  name: "ThemeSelector",

  setup () {
    function toggleTheme(theme: string) {
      applyTheme(theme)
    }

    return {
      toggleTheme
    }
  }
})
</script>
