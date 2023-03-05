<template>
  <div class="form">
    <card-header title="Form"></card-header>
    <card-body>
      <form class="form_body">
        <vue-input
          placeholder="Insira o título"
          :value="value"
          @input="updateValue($event.target.value)"
        ></vue-input>
        <vue-input placeholder="Insira o sub-título" value="title"></vue-input>
        <vue-textarea
          placeholder="Escreva o seu post (máximo de 300 caractéres)"
        ></vue-textarea>
        <vue-button class="form_body_btn" @click="sendPost()"
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

defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const emit = defineEmits({
  submit: ({ title }) => {
    if (title) {
      return true;
    } else {
      console.warn("falta title");
      return false;
    }
  },
});

function sendPost() {
  setTimeout(emit("submit", { title, subtitle, content }), 3000);
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
