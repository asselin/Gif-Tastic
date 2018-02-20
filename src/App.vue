<template>
  <div id="app" class="container">

    <div class="row">
      <div class="col">
        <pageHeader/>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <pageTitle/>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <gifSearchTags @clickBadge="searchGifs"/>
      </div>
      <div class="col-12">
        <gifSearchResults :results="gifResults"/>
      </div>
    </div>

    <pageFooter/>

  </div>
</template>

<script>
import pageHeader from './components/page-header/page-header.vue'
import pageTitle from './components/page-title/page-title'
import pageFooter from './components/page-footer/page-footer'
import gifSearchTags from './components/gif-search-tags/gif-search-tags'
import gifSearchResults from './components/gif-search-results/gif-search-results'
import { giphyAPI } from './components/gif-search-results/giphy-api-call'

export default {
  name: 'App',
  components: {
    pageHeader,
    pageTitle,
    pageFooter,
    gifSearchTags,
    gifSearchResults
  },

  data: function() {
    return {
      gifResults: []
    }
  },

  methods: {
    searchGifs(keyword) {
      giphyAPI.search(keyword).then(
        function(results) {
          this.gifResults = results;
        }.bind(this)
      );
    }
  }
}
</script>
