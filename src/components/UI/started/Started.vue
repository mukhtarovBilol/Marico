<script setup>
import HeaderStarted from '@/assets/image/header/HeaderStarted.vue';
</script>

<template>

    <div class="started">
        <div class="container">
            <img src="@/assets/image/started/Logo.png" alt="" class="started__image">
            <h3 class="started__title">Get Started Now</h3>
            <p class="started__txt">Setup is easy and takes under 5 minutes.</p>
            <RouterLink to="/pricing" class="started__btn">Get Started Now</RouterLink>
            <p class="started__subtitle"> <HeaderStarted/> <span>1000+</span> creators have already started </p>
        </div>
    </div>

</template>

