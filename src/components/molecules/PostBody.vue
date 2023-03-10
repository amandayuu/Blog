<template>
  <div class="post-body">
    <p>{{ content }}</p>
    <p class="post-body-date">{{ date }}</p>
  </div>
</template>
<script setup>
defineProps({
  content: {
    type: String,
    required: true,
    default: "",
  },
  date: {
    type: String,
    required: true,
    default: "",
  },
});
</script>
<style scoped lang="scss">
.post-body {
  padding: 15px;
  .post-body-date {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: row;
    background-color: #4c4352;
  }
}
</style>
