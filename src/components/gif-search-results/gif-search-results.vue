<template>
  <div id="gifs">
    <h1>GifResults Here</h1>
    <!-- How GIFs should appear on the page -->
    <img src="https://media3.giphy.com/media/pjnfNhaFmkhxu/giphy_s.gif" alt="">
    <img src="https://media3.giphy.com/media/pjnfNhaFmkhxu/giphy.gif" alt="">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        apiEndPoint: "http://api.giphy.com/v1/gifs/search?",
        qPrefix: "q=",
        qKeywords: "",
        and: "&",
        apiKey: "api_key=yZgwRMNKMUe6DZ9WDUONVc4R1kCEEGFA",
        limit: "limit",
        limitNumber: 5,
        gifArray: [
          {},
        ]
      }
    }
  }

// Sample ajax request:
// http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=yZgwRMNKMUe6DZ9WDUONVc4R1kCEEGFA&limit=1

/* SUPER IMPORTANT INSTRUCTIONS */

// STILL IMAGE SAMPLE <img src="https://media3.giphy.com/media/pjnfNhaFmkhxu/giphy_s.gif">
  // Access: gifRepo.gifs[i].data.original_still.url
  //         gifRepo.gifs[i].data.original_still.width
  //         gifRepo.gifs[i].data.original_still.height

// ANIMATED GIF       <img src="https://media3.giphy.com/media/pjnfNhaFmkhxu/giphy.gif">
  // Access: gifRepo.gifs[i].data.original.url
    //       gifRepo.gifs[i].data.original.width
    //       gifRepo.gifs[i].data.original.height

// const sampleLink1 = `${apiEndPoint}${qPrefix}${qKeywords}&${apiKey}&${limit}${limitNumber}`;
// const sampleLink2 = apiEndPoint + qPrefix + qKeywords + and + apiKey + and + limit + limitNumber;

  /*
   * var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=yZgwRMNKMUe6DZ9WDUONVc4R1kCEEGFA&limit=5");
   * xhr.done(function(data) { console.log("success got data", data); });
   */

  /*
   * Sample endpoint for just 1 gif:
   *     https://giphy.com/embed/l3q2tiaI2wwVUTpJe
   */
</script>