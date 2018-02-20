<template>
  <div class="row">

    <div class="col-12">
      <form class="mb-2" @submit.prevent="addTag">
        <div class="form pt-2 pb-2">
          <label class="mb-0 ml-1" for="">{{ formLabel }}</label><br>
          <input class="mb-2 pl-1" type="text" :placeholder="placeHolder" v-model="newTag"><br>
          <button class="ml-1 btn btn-secondary border">ADD</button>
        </div>
      </form>
    </div>

    <div class="col-12 tag-cloud mb-2">
      <div>2) Click tag to see GIFs</div>
      <transition-group name="list" tag="span">
        <gifSearchTag @clickBadge="clickBadge" v-for="(data, index) in tags" :key='index' :badgeName="data">
        </gifSearchTag>
      </transition-group>
    </div>

  </div>
</template>

<script>
  import gifSearchTag from './gif-search-tag'

  export default {
    components: {
      gifSearchTag
    },
    data() {
      return {
        formLabel: "1) Add a dog breed:",
        placeHolder: "ex. chihuahua",
        newTag: '',
        tags: [
          "labrador",
          "rottweiler",
          "poodle",
          "german shepherd",
          "daschund",
          "beagle",
        ]
      }
    },
    methods: {
      addTag() {
        if (this.tags.length < 25) {
          if (this.newTag.length > 2) {
            if (this.newTag.length < 21) {
              this.formLabel = "1) Add a dog breed:";
              this.tags.push(this.newTag);
              this.newTag = '';
            } else {this.formLabel = "Input is too long!";}
          } else {this.formLabel = "Input is too short!";}
        } else {this.formLabel = "Tag limit reached!"}
      },
      alert(error) {
        if (error === "short") {
          this.formLabel = "Input is too short!";
        } else if (error === "long") {
          this.formLabel = "Input is too short!";
        } else {
          this.formLabel = "Invalid input!";
        }
      },
      clickBadge(badgeName) {
        this.$emit("clickBadge", badgeName);
      }
    }
  }
</script>

<style scoped>
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
  .form {
    overflow: hidden;
    max-width: 270px;
    margin-left: auto;
    margin-right: auto;
  }
  .form, .tag-cloud {
    background: rgba(25,25,25,0.5);
    border: 3px solid #fff;
    border-radius: 10px;
  }
  input {
    border: 3px solid #333;
    border-radius: 4px;
    text-align: center;
  }
</style>
