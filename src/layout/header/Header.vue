<script setup>
import HeaderTxt from "@/assets/image/header/HeaderTxt.vue";
import HeaderStarted from '@/assets/image/header/HeaderStarted.vue';
</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header__titles">
                <h1 class="header__title">Own your audience.</h1>
                <h1 class="header__title2">So you don't lose them</h1>
            </div>
            <div class="header__content">
                <div class="header__content-desc">
                    <h3 class="header__content-title">Turn your audience into email and text message subscribers.</h3>
                    <div class="header__content-btns">
                        <RouterLink to="/blog" class="header__content-btn2">View A Demo</RouterLink>
                        <RouterLink to="/pricing" class="header__content-btn">Get Started Now</RouterLink>
                    </div>
                    <p class="header__content-txt"> <HeaderStarted/> <span>1000+</span> creators have already started </p>
                </div>
            </div>
        </div>
    </header>
</template>
