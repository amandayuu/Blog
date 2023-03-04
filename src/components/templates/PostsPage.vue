<template>
  <div class="container">
    <posts-form class="container_form"></posts-form>
    <posts-view class="container_posts"></posts-view>
  </div>
</template>
<script setup>
import PostsView from "../organisms/PostsView.vue";
import PostsForm from "../organisms/PostsForm.vue";
</script>
<style lang="scss">
.container {
  // display: grid;
  // grid-template-areas: "posts" "form";
  grid-template-columns: 2fr 1fr;
  margin: 10px;
  grid-gap: 1rem;
  // max-width: 80%;
  // margin: auto;
  margin-top: 50px;
  .container_form {
    margin-bottom: 10px;
  }
}
</style>
