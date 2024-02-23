<script setup>

defineProps(['stepNumber', 'title', 'txt'])

</script>

<template>
    <div class="steps">
        <span class="steps__span"> step {{ stepNumber }}</span>
        <h3 class="steps__title">{{ title }}</h3>
        <p class="steps__txt">{{ txt }}</p>
    </div>
</template>

