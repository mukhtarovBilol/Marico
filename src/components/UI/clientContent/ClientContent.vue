<script setup>

defineProps(['txt', 'title', 'subtitle', 'subtitle2', 'span'])

</script>

<template>
    <div class="content">
        <p class="content__txt">{{ txt }}</p>
        <h3 class="content__title">{{ title }} <span class="content__title-span">{{ span }}</span> </h3>
        <div class="content__step content__one">
            <span class="content__span">1</span>
            <p class="content__subtitle">{{ subtitle }}</p>
        </div>
        <div class="content__step">
            <span class="content__span">2</span>
            <p class="content__subtitle">{{ subtitle2 }}</p>
        </div>
    </div>
</template>

