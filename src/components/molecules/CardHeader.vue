<template>
  <div class="header">
    <span class="header_title">{{ title }}</span>
    <span class="header_icon">
      <font-awesome-icon icon="fa-solid fa-chevron-down" />
    </span>
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    required: true,
    default: "",
  },
});
</script>
<style lang="scss">
.header {
  background-color: #4c4352;
  border-radius: 10px 10px 0 0;
  height: 50px;
  color: #fff;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.04em;
  cursor: pointer;

  .header_title {
    flex-grow: 2;
    text-align: center;
  }

  .header_icon {
    flex-shrink: 4;
    text-align: right;
    margin-right: 20px;
  }
}
</style>
