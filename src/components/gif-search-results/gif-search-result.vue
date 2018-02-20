<template>
  <div class="col-4 card gif pt-2">
    <img @click="toggleSrc" class="card-img-top img" :src="isAnimated ? animatedUrl : stillUrl">
      <div class="card-body">
        <p class="rating mb-0">Rating: {{rating.toUpperCase()}}
        </p>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'

const gifSearchResult = {
  props: [
    'stillUrl', 'animatedUrl', 'rating'
  ],

  data: function() {
    return {
      isAnimated: false
    }
  },

  methods: {
    toggleSrc(event) {
      this.isAnimated = !this.isAnimated;
    }
  }
}
export default gifSearchResult;
</script>
