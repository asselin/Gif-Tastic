<template>
  <a :href="url" target="_blank">{{ text }}</a>
</template>

<script>
  export default {
    data() {
      return {
        url: "https://github.com/BenRGarcia/Gif-tastic",
        text: "View Source Code"
      }
    }
  }
</script>

<style scoped>
a {
  color: #fff;
}
a:hover {
  color: #ddd;
  text-decoration: none;
}
</style>