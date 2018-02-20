// API call to GIPHY
export const giphyAPI = {
  baseURL: "https://api.giphy.com/v1/gifs/search?",
  apiKey: "yZgwRMNKMUe6DZ9WDUONVc4R1kCEEGFA",
  limit: 6,
  lastSearch: "",
  lastPromise: null,

  search(keyword) {
    // Screen out multiple clicks of same tag
    if (keyword !== this.lastSearch) {
      this.lastSearch = keyword;

      let query = this.sanitizeQuery(keyword);
      let url = this.makeQueryURL(query);
      // Call object method to make api call, receive reponse returned
      this.lastPromise = this.callAPI(url);
    }

    return this.lastPromise;
  },

  // Replace spaces with '+' in search term
  sanitizeQuery(query) {
    return query.replace(' ', '+');
  },

  // Build URL for API Request
  makeQueryURL(query) {
    return `${this.baseURL}q=${query}&limit=${this.limit}&api_key=${this.apiKey}`;
  },

  // Make API call, return response (but only the '.data', for gif object array)
  callAPI(queryURL) {
    return $.ajax({
      url: queryURL,
      method: "GET"
    }).then(response => {
      return response.data;
    });
  }
};
