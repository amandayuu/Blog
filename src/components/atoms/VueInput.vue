<template>
  <input :placeholder="placeholder" class="input" :value="value" />
</template>
<script setup>
import { defineProps } from "vue";
defineProps({
  placeholder: {
    type: String,
    required: false,
    default: "Insira um conteúdo",
  },
});
</script>
<style lang="scss">
@import "../../style.scss";

.input {
  border: $border;
  border-radius: $borderRadius;
  font-size: $formFontSize;
  width: $formFieldWidthMobile;
  height: 40px;
  margin: 10px;
  padding: 8px;

  &::placeholder {
    color: #959595;
  }
}
</style>
