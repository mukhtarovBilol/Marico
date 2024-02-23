<script setup>
import { ref } from 'vue';

const BurgerLine = ref(false)

const pages = [
    {
      path: "/about",
      name: "About",
      component: () => import("@/views/about/About.vue")
    },
    {
      path: "/pricing",
      name: "Pricing",
      component: () => import("@/views/pricing/Pricing.vue")
    },
    {
        path: "/blog",
        name: "Blog",
        component: () => import("@/pages/BlogPage.vue")
    },
]

const registration = [
    { 
      path: "/login",
      name: "Login",
      component: () => import("@/components/loginIn/LoginIn.vue") 
    },
    { 
      path: "/sign", 
      name: "Sign in",
      component: () => import("@/components/signUp/SignUp.vue") 
    },
]

</script>

<template>
    <nav class="nav">
        <div class="container">
            <router-link to="/" @click="BurgerLine = false" class="nav__logo">
                <img src="@/assets/image/nav/logo.svg" alt="" class="nav__logo-img">
                Marico
            </router-link>
            <div class="nav__burger" @click="BurgerLine = !BurgerLine" :class="{'active' : BurgerLine}">
                <span class="nav__burger-line"></span>
            </div>
            <div class="nav__menu" :class="{'active' : BurgerLine}">
                <ul class="nav__list">
                    <li class="nav__item">
                        <a href="#!" class="nav__link">Use Cases</a>
                    </li>
                    <li class="nav__item" v-for="item in pages" :key="item.name">
                        <RouterLink :to="item.path" class="nav__link" @click="BurgerLine = false">
                            {{ item.name }}
                        </RouterLink>
                    </li>
                </ul>
                <div class="nav__registration">
                    <RouterLink v-for="item in registration" :key="item.name" :to="item.path" class="nav__login-in" @click="BurgerLine = false">
                        {{ item.name }}
                    </RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>

 