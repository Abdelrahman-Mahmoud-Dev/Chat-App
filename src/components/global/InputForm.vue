<template>
  <div class="field">
    <p class="control has-icons-left has-icons-right">
      <input
        autocomplete
        :class="[{ validInput: isValid }, 'input']"
        :type="type"
        required
        :placeholder="placeholder"
        @focus="focusInput()"
        v-model="inputVal"
      />
      <slot name="inputIcon"></slot>
      <span v-if="isFocus" class="icon is-small is-right">
        <i :class="[{ valid: isValid }, 'fas', 'fa-check']"></i>
      </span>
    </p>
  </div>
</template>

<script>
import { ref, computed, watchEffect } from "vue";

export default {
  props: ["type", "placeholder"],
  emits: ["text", "email", "password"],
  setup(props, { emit }) {
    const isFocus = ref(true);
    const inputVal = ref("");
    function focusInput() {
      isFocus.value = true;
    }

    // emit value for parent component
    const isValid = computed(() => {
      if (inputVal.value.length > 6) {
        return true;
      } else {
        return false;
      }
    });
    watchEffect(() => {
      if (inputVal.value.length > 0) {
        emit(props.type, inputVal.value);
      }
    });

    return {
      isFocus,
      isValid,
      //   isBlur,
      focusInput,

      inputVal,
      Error,
    };
  },
};
</script>

<style scoped>
.valid {
  color: green;
}
.input:focus {
  border-color: #b5b5b5;
  box-shadow: none;
}
input.validInput {
  border-color: green;
}
input.validInput:focus {
  border-color: green;
}
/* input:focus {
  outline: none;
  border-color: none;
} */
/* input:blur {
  outline: 1px solid #ccc;
} */
</style>