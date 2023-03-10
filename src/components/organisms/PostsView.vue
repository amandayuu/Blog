<template>
  <div class="posts">
    <card-header title="Posts" class="posts_header"></card-header>
    <card-body class="posts_body">
      <ul>
        <li v-for="(post, i) in posts" :key="i" class="posts_body_card">
          <post-header
            :title="post.title"
            :subtitle="post.subtitle"
          ></post-header>
          <hr />
          <post-body :content="post.content" :date="post.date"></post-body>
        </li>
      </ul>
    </card-body>
  </div>
</template>
<script setup>
import CardHeader from "../molecules/CardHeader.vue";
import CardBody from "../molecules/CardBody.vue";
import PostBody from "../molecules/PostBody.vue";
import PostHeader from "../molecules/PostHeader.vue";

defineProps({
  posts: {
    type: Array,
    required: true,
  },
});
</script>
<style lang="scss">
.posts {
  .posts_body {
    hr {
      border-bottom: 2px solid transparent;
      background: transparent;
      border-image: linear-gradient(45deg, #961ef4, #e35858) 1;
    }
    .posts_body_card {
      box-shadow: 0px 3px 5px -2px;
      border-radius: 10px;
      margin-top: 10px;
    }
  }
}
</style>
