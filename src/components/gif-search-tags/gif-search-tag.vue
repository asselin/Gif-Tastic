<template>
  <span @click="clickBadge" class="badge badge-pill badge-secondary m-1 list-item">
    {{ badgeName }}
  </span>
</template>

<script>
  export default {
    props: [
      'badgeName'
    ],
    methods: {
      clickBadge(e) {
        this.$emit("clickBadge", this.badgeName);
      }
    }
  }
</script>

<style scoped>
  .list-item {
    display: inline-block;
    margin-right: 10px;
    border: 1px solid #fff;
    cursor: pointer;
  }
  .list-item:hover {
    opacity: 0.9;
  }
  .badge {
    font-size: 85%;
  }
</style>
