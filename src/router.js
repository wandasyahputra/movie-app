import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },

    // { path: "/:notFound(.*)", component: NotFound },
  ],
  linkActiveClass: "active",
});

export default router;
