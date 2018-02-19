<template>
  <div id="gifs">
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
      gifSearchResults.images = [];
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

        let newDiv = $('<div>');

        // Save some keystrokes
        let imgObj = gifSearchResults.gifObjects[index].images;

        let staticImage = imgObj.original_still.url;
        let animatedGif = imgObj.original.url;
        let rating = gifSearchResults.gifObjects[index].rating.toUpperCase();
        $("#gifs").append(`<div class="col-4 card gif pt-2"><img class="card-img-top img" src="${staticImage}" data-alt="${animatedGif}"><div class="card-body"><p class="rating mb-0">Rating: ${rating}</p></div></div>`);        
      });

      // gifSearchResults.methods.preloadGifs();
    },

    preloadGifs() {
      // Remove previously loaded Gifs
      gifSearchResults.preloadedGifs = [];

      // To store all animated gif's 'src=' path
      let gifSrcPaths = [];

      // Iterate over page <img>'s attribute "data-alt"
      $('img').each( function() {
        let data = $( this ).data('alt');
        gifSrcPaths.push(data);
      });

      // Use 'new Image()' constructor to store fully loaded Gifs
      $.each(gifSrcPaths, function(index) {
        this.preloadedGifs[index] = new Image();
        this.preloadedGifs[index].src = gifSrcPaths[index];
      });
    },

    toggleSrc(imageClicked) {

      console.log(`which image was clicked?`);
      console.log(imageClicked.src);

      const imgSrc = imageClicked.src;
      console.log(`tempImg src: ${imgSrc}`);

      // Iterate over gif object array
      for (let i = 0; i < gifSearchResults.gifObjects.length; i++) {
        console.log(`For loop says:`);
        console.log(gifSearchResults.gifObjects[i]);
        // If still image
        if (imgSrc === gifSearchResults.gifObjects[i].images.original_still.url) {
          console.log(`We have a static match at index ${i}`);
          imageClicked.src = gifSearchResults.gifObjects[i].images.original.url;
          console.log(`imageClicked.src set to ${imageClicked.src}`);
        }
        // If animated gif
        if (imgSrc === gifSearchResults.gifObjects[i].images.original.url) {
          console.log(`We have an animated match at index ${i}`);
          imageClicked.src = gifSearchResults.gifObjects[i].images.original_still.url;
          console.log(`imageClicked.src set to ${imageClicked.src}`);
        }
      }
    }
  }
}
export default gifSearchResults;
</script>

<style>
.gif {
  border: 3px solid #fff;
  border-radius: 4px;
  margin: 0.5rem;
  margin-top: 0;
}
.rating {
  display: inline-block;
}
.card-body {
  padding-top: 0;
  padding-bottom: 0;
}
.card {
  display: inline-block;
  max-width: 290px;
  background: rgba(25,25,25,0.5);
}
</style>