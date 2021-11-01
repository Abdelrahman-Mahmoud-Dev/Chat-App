<template>
  <div class="container">
    <nav-bar></nav-bar>
    <chat-form></chat-form>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ChatForm from "@/components/ChatFrom.vue";
export default {
  components: {
    NavBar,
    ChatForm,
  },
  setup() {
    return {};
  },
};
</script>
