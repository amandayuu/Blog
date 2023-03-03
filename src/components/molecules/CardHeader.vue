<template>
  {{ title }}
</template>
<script setup>
import { defineProps } from "vue";
defineProps({
  title: {
    type: String,
    required: true,
    default: "",
  },
});
</script>
<style></style>
