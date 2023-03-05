<template>
  <div class="container">
    <posts-form class="container_form" @add-post="handleAddPost"></posts-form>
    <posts-view class="container_posts" :posts="posts"></posts-view>
  </div>
</template>
<script setup>
import PostsView from "../organisms/PostsView.vue";
import PostsForm from "../organisms/PostsForm.vue";
import { ref } from "vue";

const posts = ref([]);

function handleAddPost(post) {
  posts.value.push(post);
}
</script>
<style lang="scss">
.container {
  grid-template-columns: 2fr 1fr;
  margin: 10px;
  grid-gap: 1rem;
  margin-top: 50px;
  .container_form {
    margin-bottom: 10px;
  }
}
</style>
