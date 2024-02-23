import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import LoginIn from "./components/loginIn/LoginIn.vue";
import SignUp from "./components/signUp/SignUp.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/login",
      component: LoginIn,
    },
    {
      path: "/sign",
      name: "Sign in",
      component: SignUp,
    },
    {
      path: "/about",
      name: "About",
      component: () => import("@/views/about/About.vue"),
    },
    {
      path: "/pricing",
      name: "Pricing",
      component: () => import("@/views/pricing/Pricing.vue"),
    },
    {
      path: "/blog",
      name: "Blog",
      component: () => import("@/pages/BlogPage.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import("@/pages/NotFoundPage.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});
