<template>

  <div class="row">
    <div class="col-8 offset-2 title mb-2">
      3) Click images to toggle gif animation
    </div>

    <div id="gifs" class="col-12">
      <!-- Gifs append here -->
    </div>
  </div>

</template>

<script>
// https://www.hongkiat.com/blog/on-click-animated-gif/
import Vue from 'vue'

const gifSearchResults = {

  gifObjects:    [], // Stores GIPHY API response.data's array of objects
  preloadedGifs: [], // Stores preloaded gifs to avoid gif loading delay after click

  methods: {

    clearState() {
      gifSearchResults.gifObjects = [];
      gifSearchResults.preloadedGifs = [];
    },

    loadAPIResponse(obj) {
      gifSearchResults.gifObjects.push(obj);
    },

    // Transform API Response into array of static images
    loadImgs() {
      $("#gifs").empty();

      // Iterate over objects in response.data array...
      $.each( gifSearchResults.gifObjects, function(index) {

        // Save some keystrokes
        let imgObj = gifSearchResults.gifObjects[index].images;

        let staticImage = imgObj.original_still.url;
        let animatedGif = imgObj.original.url;
        let rating = gifSearchResults.gifObjects[index].rating.toUpperCase();
        $("#gifs").append(`<div class="col-4 card gif pt-2"><img class="card-img-top img" src="${staticImage}" data-alt="${animatedGif}"><div class="card-body"><p class="rating mb-0">Rating: ${rating}</p></div></div>`);        
      });

      gifSearchResults.methods.preloadGifs();
    },

    preloadGifs() {
      // Remove previously loaded Gifs
      gifSearchResults.preloadedGifs = [];

      let gifsToLoad = gifSearchResults.gifObjects;
      let loadedGifs = gifSearchResults.preloadedGifs;

      // Iterate over gif objects, add img objects to array 
      $.each( gifsToLoad, function(index) {
        loadedGifs[index] = new Image();
        loadedGifs[index].src = gifsToLoad[index].images.original.url;
      });
      console.log(`preloadedGifs are:`);
      console.log(gifSearchResults.preloadedGifs);
    },

    toggleSrc(imageClicked) {

      const imgSrc = imageClicked.src;

      // Iterate over gif object array
      for (let i = 0; i < gifSearchResults.gifObjects.length; i++) {
        // If still image
        if (imgSrc === gifSearchResults.gifObjects[i].images.original_still.url) {
          imageClicked.src = gifSearchResults.gifObjects[i].images.original.url;
        }
        // If animated gif
        if (imgSrc === gifSearchResults.gifObjects[i].images.original.url) {
          imageClicked.src = gifSearchResults.gifObjects[i].images.original_still.url;
        }
      }
    }
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