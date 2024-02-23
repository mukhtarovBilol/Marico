<script setup>

const props = defineProps({
    info: {
        type: Object,
        required: true
    }
})

</script>

<template>

    <div class="card">
        <img v-show="info?.img || info?.aboutImg" :src="info?.img || info?.aboutImg" alt="" class="card__image">
        <h3 class="card__title">{{ info?.title || info?.aboutTitle || info?.pricingTitle }}</h3>
        <p class="card__txt">{{ info?.txt || info?.aboutTxt || info?.pricingTxt }}</p>
        <a href="https://twitter.com/" target="_blank" class="card__link">
            {{ info?.aboutSocial }}
            <img :src="info?.icon" alt="">
        </a>
        <div class="card__prices">
            <h3 class="card__price">{{ info?.pricingPrice }}</h3>
            <p class="card__priceTxt">{{ info?.pricingPriceTxt }}</p>
        </div>
        <p class="card__price2">{{ info?.pricingAboutPrice }}</p>
        <p class="card__collect">{{ info?.pricingCollect }}</p>
        <p class="card__emails">{{ info?.pricingFreeEmails }}</p>
        <p class="card__letter">{{ info?.pricingMoreLetter }}</p>
        <p class="card__key">{{ info?.pricingKey }}</p>
        <p class="card__rate">
            <img :src="info?.pricingImage" alt="">
            {{ info?.pricingRate }}
        </p>
        <p class="card__rate">
            <img :src="info?.pricingImage" alt="">
            {{ info?.pricingRate2 }}
        </p>
        <a v-if="info?.pricingBtnTxt" href="#!" class="card__btn">{{ info?.pricingBtnTxt }}</a>
    </div>

</template>

