<template>
  <div class="form">
    <card-header title="Form"></card-header>
    <card-body class="form_body form-border">
      <vue-input placeholder="Insira o título"></vue-input>
      <vue-input placeholder="Insira o sub-título"></vue-input>
      <vue-textarea
        placeholder="Escreva o seu post (máximo de 300 caractéres)"
      ></vue-textarea>
      <vue-button class="form_body_btn">New Post</vue-button>
    </card-body>
  </div>
</template>
<script setup>
import CardHeader from "../molecules/CardHeader.vue";
import CardBody from "../molecules/CardBody.vue";
import VueButton from "../atoms/VueButton.vue";
import VueInput from "../atoms/VueInput.vue";
import VueTextarea from "../atoms/VueTextarea.vue";
</script>
<style lang="scss">
.form {
  .form-border {
    // border: 2px solid #4c4352;
    // padding: 20px;
    // border-radius: 0 0 10px 10px;
  }
}
</style>
