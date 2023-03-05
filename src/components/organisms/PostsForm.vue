<template>
  <div class="form">
    <card-header title="Form"></card-header>
    <card-body>
      <form class="form_body" @submit.prevent>
        <!-- <input v-model="title" placeholder="sdasdas" /> -->
        <vue-input id="nome" v-model="title"></vue-input>
        <vue-input id="nome" v-model="subtitle"></vue-input>
        <!-- <vue-input type="text" placeholder="Insira o sub-título"></vue-input> -->
        <vue-textarea
          v-model="content"
          placeholder="Escreva o seu post (máximo de 300 caractéres)"
        ></vue-textarea>
        <vue-button class="form_body_btn" @click="createPost()"
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
import { defineProps, reactive, ref } from "vue";

const posts = reactive([]);
const title = ref("");
const subtitle = ref("");
const content = ref("");

function createPost() {
  const post = `${title.value},${subtitle.value},${content.value}`;
  posts.push(post);
  console.log(posts);
}
</script>
<style lang="scss">
.form {
  .form_body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
