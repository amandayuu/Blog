<template>
  <posts-view></posts-view>
  <posts-form></posts-form>
</template>
<script setup>
import { onMounted } from "vue";
import PostsView from "../organisms/PostsView.vue";
import PostsForm from "../organisms/PostsForm.vue";

onMounted(() => {
  console.log("teste");
});
</script>
<style></style>
