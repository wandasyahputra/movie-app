import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import MovieDetail from "./pages/MovieDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/:movieId", component: MovieDetail },

    // { path: "/:notFound(.*)", component: NotFound },
  ],
  linkActiveClass: "active",
});

export default router;
