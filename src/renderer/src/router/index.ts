import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Settings from "@renderer/views/Settings.vue";
import CreateView from "../views/CreateView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // Chargement paresseux pour optimiser les performances
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/create",
      name: "create",
      component: CreateView,
    },
    {
      path: "/settings",
      name: "settings",
      component: () => Settings,
    },
  ],
});

export default router;
