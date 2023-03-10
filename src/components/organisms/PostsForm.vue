<template>
  <div class="form">
    <card-header title="Form"></card-header>
    <card-body>
      <span v-if="isEmpty" class="form_alert_fail">
        <p>Preencha os campos obrigatórios (são aqueles com o símbolo *)</p>
      </span>
      <form class="form_body" @submit.prevent>
        <vue-input
          id="nome"
          v-model="title"
          placeholder="Insira o título*"
        ></vue-input>
        <vue-input
          id="nome"
          v-model="subtitle"
          placeholder="Insira o sub-título"
        ></vue-input>
        <vue-textarea
          v-model="content"
          placeholder="Escreva o seu post (máximo de 300 caractéres) *"
        ></vue-textarea>
        <vue-button class="form_body_btn" @click="createPost($root)"
          >New Post</vue-button
        >
      </form>
    </card-body>
  </div>
</template>
<script setup>
import CardHeader from "../molecules/CardHeader.vue";
import CardBody from "../molecules/CardBody.vue";
import VueButton from "../atoms/VueButton.vue";
import VueInput from "../atoms/VueInput.vue";
import VueTextarea from "../atoms/VueTextarea.vue";
import { reactive, ref, defineEmits, computed } from "vue";

const posts = reactive([]);
const title = ref("");
const subtitle = ref("");
const content = ref("");
const date = ref("");
const isEmpty = ref("");
const emits = defineEmits(["addPost"]);

function createPost() {
  date.value = new Date().toJSON().slice(0, 10).replace(/-/g, "/");

  const post = {
    title: title.value,
    subtitle: subtitle.value,
    content: content.value,
    date: date.value,
  };

  if (!post.title || !post.content) {
    console.log("ta vazio");
    return (isEmpty.value = true);
  }

  isEmpty.value = false;

  this.emits("addPost", post);

  title.value = "";
  subtitle.value = "";
  content.value = "";
  date.value = "";
}
</script>
<style lang="scss">
@import "../../style.scss";
.form {
  .form_alert_fail {
    display: flex;
    justify-content: center;
    border: 2px solid red;
    width: $formFieldWidthMobile;
    padding: 10px;
    border-radius: $borderRadius;
    margin: auto;

    p {
      text-align: center;
    }
  }
  .form_body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
