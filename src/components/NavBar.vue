<template>
  <div class="box mt-4">
    <nav
      v-if="user"
      class="navbar box is-success"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item mr-4" href="#">
          <img src="@/assets/chat-grouptwo.png" width="64" height="64" />
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-item is-flex-grow-1 is-justify-content-start">
        <div class="box m-0 mr-4 p-2">
          <p class="">your name is {{ user.displayName }}</p>
        </div>
        <div class="box mb-0 p-2">
          <p class="">your email is {{ user.email }}</p>
        </div>
        <a @click="logoutUser" class="button is-ligth ml-auto">
          <strong>Log out</strong>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
import getUserName from "@/composables/getUser.js";
import useLogout from "@/composables/useLogout.js";
import { useRouter } from "vue-router";
import { watchEffect } from "vue";
export default {
  setup() {
    const { user } = getUserName();
    const { error, logout } = useLogout();

    const router = useRouter();
    async function logoutUser() {
      try {
        await logout();
        if (!error.value) {
          console.log("logged out User");
        }
      } catch (e) {
        error.value = e.message;
      }
    }
    watchEffect(() => {
      if (!user.value) {
        router.push("/");
      }
    });
    return {
      user,
      logoutUser,
      error,
      logout,
    };
  },
};
</script>

<style>
.navbar-item img {
  max-height: 100% !important;
}
</style>