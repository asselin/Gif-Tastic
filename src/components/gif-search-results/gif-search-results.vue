<template>

  <div class="row">
    <div class="col-8 offset-2 title mb-2">
      3) Click images to toggle gif animation
    </div>

    <div id="gifs" class="col-12">
      <!-- Gifs append here -->
      <gifSearchResult v-for="res in results" :stillUrl="res.images.original_still.url" :animatedUrl="res.images.original.url" :rating="res.rating.toUpperCase()" :key="res.id">
      </gifSearchResult>
    </div>
  </div>

</template>

<script>
import Vue from 'vue'
import gifSearchResult from './gif-search-result'

const gifSearchResults = {
  props: [
    'results'
  ],

  components: {
    gifSearchResult
  }
}
export default gifSearchResults;
</script>

<style scoped>
.title  {
    background: rgba(25,25,25,0.5);
    border: 3px solid #fff;
    border-radius: 10px;
  }
</style>
