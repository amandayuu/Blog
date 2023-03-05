<template>
  <textarea
    v-model="value"
    :placeholder="placeholder"
    class="textarea"
    @input="updateValue"
  ></textarea>
</template>
<script>
import { ref, watch } from "vue";

export default {
  props: {
    modelValue: { type: String, default: "" },
    placeholder: { type: String, default: "" },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const value = ref(props.modelValue);

    watch(
      () => props.modelValue,
      (newValue) => {
        value.value = newValue;
      }
    );

    function updateValue(event) {
      value.value = event.target.value;
      emit("update:modelValue", value.value);
    }

    return {
      value,
      updateValue,
    };
  },
};
</script>
<style lang="scss">
@import "../../style.scss";
.textarea {
  border: $border;
  border-radius: $borderRadius;
  font-size: $formFontSize;
  width: $formFieldWidthMobile;
  height: 315px;
  margin: 10px;
  padding: 8px;

  &::placeholder {
    color: #959595;
  }
}
</style>
