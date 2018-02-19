<template>
  <h1 :class="[classArray]">{{ title }}</h1>
</template>

<script>
  export default {
    data() {
      return {
        title: "Gif-Tastic!",
        classArray: ["display-3"]
      }
    }
  }
</script>