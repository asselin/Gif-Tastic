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
      <div class="col">
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

<style>
 @import url('https://fonts.googleapis.com/css?family=Ubuntu');

 html, body, #app {
  height: 100%;
 }

body {
  background: url('./assets/dogs-bones-bg.jpg') top fixed;
  text-align: center;
  color: #fff;
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.3rem;
}
</style>
