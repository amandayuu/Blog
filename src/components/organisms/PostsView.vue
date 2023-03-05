<template>
  <div class="posts">
    <card-header title="Posts"></card-header>
    <card-body class="form_body card-border">
      <ul>
        <li v-for="(post, i) in posts" :key="i">
          {{ post.title }}
        </li>
      </ul>
    </card-body>
  </div>
</template>
<script setup>
import CardHeader from "../molecules/CardHeader.vue";
import CardBody from "../molecules/CardBody.vue";
</script>
<style lang="scss">
.posts {
}
</style>
