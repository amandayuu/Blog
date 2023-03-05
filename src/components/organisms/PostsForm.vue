<template>
  <div class="form">
    <card-header title="Form"></card-header>
    <card-body>
      <form class="form_body" @submit.prevent>
        <vue-input
          id="nome"
          v-model="title"
          placeholder="Insira o título"
        ></vue-input>
        <vue-input
          id="nome"
          v-model="subtitle"
          placeholder="Insira o sub-título"
        ></vue-input>
        <vue-textarea
          v-model="content"
          placeholder="Escreva o seu post (máximo de 300 caractéres)"
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
import { reactive, ref, defineEmits } from "vue";

const posts = reactive([]);
const title = ref("");
const subtitle = ref("");
const content = ref("");

const emits = defineEmits(["addPost"]);

function createPost() {
  const post = {
    title: title.value,
    subtitle: subtitle.value,
    content: content.value,
  };

  if (!post.title || !post.content) {
    console.log("ta vazio");
    return;
  }

  // posts.push(post);

  // component.$emit("new-post", post);
  this.emits("addPost", post);

  title.value = "";
  subtitle.value = "";
  content.value = "";
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
