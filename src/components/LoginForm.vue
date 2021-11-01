<template>
  <form @submit.prevent="loginUser" class="box">
    <input-form @email="getEmail" type="email" placeholder="enter your mail">
      <template v-slot:inputIcon>
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </template>
    </input-form>

    <input-form
      @password="getPassword"
      type="password"
      placeholder="enter your password"
    >
      <template v-slot:inputIcon>
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </template>
    </input-form>

    <div class="level-left mt-5">
      <button class="button is-success">Sign Up</button>
    </div>
    <article class="message is-danger" v-if="!!error">
      <div class="message-header">
        <p>ooh!</p>
        <button
          class="delete"
          aria-label="delete"
          @click="handelError"
        ></button>
      </div>
      <div class="message-body">ooops {{ error }}</div>
    </article>
  </form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useLogin from "@/composables/useLogin.js";
export default {
  setup() {
    const { login, error } = useLogin();
    const email = ref("");
    const password = ref("");
    const router = useRouter();
    function getEmail(val) {
      email.value = val;
    }
    function getPassword(val) {
      password.value = val;
    }
    async function loginUser() {
      try {
        await login(email.value, password.value);
        router.push("/chatroom");
      } catch (err) {
        error.value = err.message;
      }
    }
    function handelError() {
      error.value = "";
    }
    return {
      email,
      password,
      getEmail,
      getPassword,
      loginUser,
      error,
      handelError,
    };
  },
};
</script>

<style>
article {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>