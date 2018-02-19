<template>
  <footer :class="classArray">
    <a :href="giphyUrl" target="_blank">
      <img :src="imgUrl">
    </a>
  </footer>
</template>

<script>
export default {
    data() {
      return {
        imgUrl: require("../../assets/giphy-logo.png"),
        giphyUrl: "https://giphy.com/",
        classArray: ["fixed-bottom"]
      }
    }
  }
</script>

<style scoped>
img {
  background: rgba(255,255,255,0.6);
  padding: 0.3rem;
  border-radius: 4px;
}
</style>