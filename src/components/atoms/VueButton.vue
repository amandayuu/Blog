<template>
  <button class="primary-button"><slot></slot></button>
</template>
<script setup></script>
<style>
.primary-button {
  background: #00a78e;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
}
</style>
