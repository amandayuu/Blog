<template>
  <div class="body">
    <slot></slot>
  </div>
</template>
<script setup></script>
<style>
.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  border: 2px solid #4c4352;
  padding: 20px;
  border-radius: 0 0 10px 10px;
}
</style>
