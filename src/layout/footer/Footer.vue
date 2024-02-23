<script setup>

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
        component: () => import("@/views/blog/Blog.vue")
    },
    { 
      path: "/sign", 
      name: "Sign in",
      component: () => import("@/components/signUp/SignUp.vue") 
    },
]

</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__logo-desc">
                <RouterLink to="/" class="nav__logo">
                    <img src="@/assets/image/nav/logo.svg" alt="" class="nav__logo-img">
                    Marico
                </RouterLink>
                <a href="mailto:info@marico.co" class="footer__email">info@marico.co</a>
            </div>
            <ul class="footer__list">
                <li class="footer__item" v-for="item in pages" :key="item.name">
                    <RouterLink  class="footer__link" :to="item.path">
                        {{ item.name }}
                    </RouterLink>
                </li>
            </ul>
        </div>
    </footer>
</template>

