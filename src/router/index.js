import { createRouter, createWebHistory } from "vue-router";
import Welcome from "@/views/Welcome.vue";
import ChatRoom from "@/views/ChatRoom.vue";
import { projectAuth } from "@/firebase/config.js";
import Test from "@/views/Test.vue";
function requireAuth(to, from, next) {
  let user = projectAuth.currentUser;
  if (!user) {
    next("/");
  } else {
    next();
  }
}
const routes = [
  {
    path: "/welcome",
    name: "welcome",
    component: Welcome,
  },
  {
    path: "/",
    redirect: "/welcome",
  },
  {
    path: "/test",
    component: Test,
  },
  {
    path: "/chatroom",
    component: ChatRoom,
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // linkActiveClass: "navbar-item",
  // linkExactActiveClass: "navbar-item-active",
});

export default router;
