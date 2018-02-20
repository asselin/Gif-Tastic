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
        <gifSearchTags/>
      </div>
      <div class="col-12">
        <gifSearchResults/>
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
import { controller, giphyAPI } from './components/gif-search-results/giphy-api-call'

// Click event listener
$(function() {
  $('#app').on('click', ".badge", e => {
    let clickValue = $(e.target).text().trim();
    controller.clickHandler(clickValue);
  });

  $('#app').on('click', ".img", e => {
    controller.toggleGif(e.target);
  });
});

export default {
  name: 'App',
  components: {
    pageHeader,
    pageTitle,
    pageFooter,
    gifSearchTags,
    gifSearchResults
  }
}
</script>
