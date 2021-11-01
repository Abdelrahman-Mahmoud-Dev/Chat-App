<template>
  <form @submit.prevent="createUser" action="" class="box">
    <input-form
      @text="getUserName"
      type="text"
      placeholder="enter your user name"
    >
      <template v-slot:inputIcon>
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </template>
    </input-form>

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
import useSignup from "@/composables/useSignup.js";

export default {
  setup() {
    const { signup, error } = useSignup();
    const userName = ref("");
    const email = ref("");
    const password = ref("");
    const router = useRouter();
    function getUserName(val) {
      userName.value = val;
    }
    function getEmail(val) {
      email.value = val;
    }
    function getPassword(val) {
      password.value = val;
    }
    async function createUser() {
      await signup(email.value, password.value, userName.value);
      router.push("/chatroom");
    }
    function handelError() {
      error.value = null;
    }
    return {
      getUserName,
      getEmail,
      getPassword,
      createUser,
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
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
}
</style>