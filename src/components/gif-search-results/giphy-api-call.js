import gifSearchResults from './gif-search-results'

// Controller
export const controller = {
  lastSearch: "",

  // Receive the 'click''s value
  clickHandler(keyword) {

    // Screen out multiple clicks of same tag
    if (keyword !== this.lastSearch) {
      // Clear previous state of component object
      gifSearchResults.methods.clearState();
      // Call object method to make api call, receive reponse returned
      giphyAPI.sanitizeQuery(keyword);
    }
  },

  receiveResponse(response) {
    // 'for loop' to load into component object array
    $.each(response, index => {
      gifSearchResults.methods.loadAPIResponse(response[index]);
    });
    // call method to render images to screen
    gifSearchResults.methods.loadImgs();
  },

  toggleGif(imageClicked) {
    // image was clicked, need to animate/stop gif
    gifSearchResults.methods.toggleSrc(imageClicked);
  }
};

// API call to GIPHY
export const giphyAPI = {
  baseURL: "http://api.giphy.com/v1/gifs/search?",
  apiKey: "yZgwRMNKMUe6DZ9WDUONVc4R1kCEEGFA",
  limit: 6,

  // Replace spaces with '+' in search term
  sanitizeQuery(query) {
    let queryArray = query.split("");
    $.each( queryArray, function(index) {
      if (query[index] === " ") queryArray[index] = "+";
    });
    let sanitizedQuery = queryArray.join("");
    this.makeQueryURL(sanitizedQuery);
  },

  // Build URL for API Request
  makeQueryURL(query) {
    let queryURL = `${this.baseURL}q=${query}&limit=${this.limit}&api_key=${this.apiKey}`;
    this.callAPI(queryURL);
    console.log(queryURL);
  },

  // Make API call, return response (but only the '.data', for gif object array)
  callAPI(queryURL) {
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then( response => {
      controller.receiveResponse(response.data);
      return response.data;
    });
  }
};
