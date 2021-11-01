<template>
  <div class="mx-auto mt-6 px-6 py-6 welcome container is-max-desktop">
    <div v-if="isLogin">
      <h2>lOGIN</h2>
      <login-form></login-form>
      <p>
        No account yet ? <span class="toggle" @click="toggleFrom">Sign Up</span>
      </p>
    </div>
    <div v-else>
      <h2>SIGN UP</h2>
      <signup-form></signup-form>
      <p>
        I have account <span class="toggle" @click="toggleFrom"> Log In </span>
      </p>
    </div>
  </div>
</template>

<script>
import SignupForm from "@/components/SignupForm.vue";
import LoginForm from "@/components/LoginForm.vue";
import { ref } from "vue";
export default {
  components: {
    SignupForm,
    LoginForm,
  },

  setup() {
    const isLogin = ref(false);
    function toggleFrom() {
      isLogin.value = !isLogin.value;
    }

    return {
      isLogin,
      toggleFrom,
    };
  },
};
</script>

<style>
.welcome {
  text-align: center;

  border-radius: 7px;
  background: linear-gradient(to bottom, #43ec7b 0%, #18f5a0 100%);
}
.welcome span.toggle {
  color: rgb(8, 2, 2);
  cursor: pointer;
  text-decoration: underline;
}
</style>