<template>
  <div>
    <input
      :id="id"
      class="input"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @input="updateValue"
    />
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  props: {
    id: { type: String, required: true },
    type: { type: String, default: "text" },
    modelValue: { type: String, default: "" },
    placeholder: { type: String, default: "" },
  },
  setup(props, { emit }) {
    const value = ref(props.modelValue);

    // Watch for changes in the v-model value
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

    return { value, updateValue };
  },
};
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
