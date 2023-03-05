<template>
  <button class="btn"><slot></slot></button>
</template>
<script setup></script>
<style lang="scss">
@import "../../style.scss";

.btn {
  background: $buttonColor;
  border-radius: $borderRadius;
  color: #fff;
  font-weight: 700;
  font-size: $formFontSize;
  line-height: 16px;
  border: transparent;
  padding-top: 14px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background-color: darken($color: $buttonColor, $amount: 10);
  }

  &.form_body_btn {
    width: $formFieldWidthMobile;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    text-transform: uppercase;
  }
}
</style>
