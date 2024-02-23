<script setup>
import Started from '@/components/UI/started/Started.vue';
import Footer from '@/layout/footer/Footer.vue';
import { pricnigImage } from "@/helper/images.js";
import Card from '@/components/UI/card/Card.vue';

const pricing = [
    {
        id: 1,
        pricingTitle: 'Starer',
        pricingTxt: 'Perfect for tying out Wavium',
        pricingPrice: 'Free',
        pricingAboutPrice: 'or $0/mo, billed monthly',
        pricingCollect: 'Collect Unlimited subscribers',
        pricingFreeEmails: '500 monthly emails',
        pricingMoreLetter: 'Upgrade to send more emails',
        pricingKey: 'Key features',
        pricingRate: 'Automatic updating home page',
        pricingRate2: 'Unlimited sources + posts',
        pricingBtnTxt: 'Start For Free',
        pricingImage: pricnigImage
    },
    {
        id: 2,
        pricingTitle: 'Basic',
        pricingTxt: 'Build your online home',
        pricingPrice: '$14',
        priceTxt: 'Per month',
        pricingAboutPrice: 'or $19/mo, billed monthly',
        pricingCollect: 'Collect Unlimited subscribers',
        pricingFreeEmails: '2,000 free monthl emails',
        pricingMoreLetter: 'Purchase more for $0.002 per email',
        pricingKey: 'Everything in starter, plus',
        pricingRate: 'Remove Wavium branding',
        pricingRate2: 'Embed Wavium on your own domain',
        pricingBtnTxt: 'Start Free 14-day Trial',
        pricingImage: pricnigImage
    },
    {
        id: 3,
        pricingTitle: 'Complete',
        pricingTxt: 'Enhanced engagement',
        pricingPrice: '$29',
        priceTxt: 'Per month',
        pricingAboutPrice: 'or $34/mo, billed monthly',
        pricingCollect: 'Collect Unlimited subscribers',
        pricingFreeEmails: '10,000 free monthly emails',
        pricingMoreLetter: 'Purchase more for $0.002 per email',
        pricingKey: 'Everything in basic, plus ',
        pricingRate: 'Collect text massage subscribers',
        pricingRate2: 'Share posts over text massage',
        pricingBtnTxt: 'Start Free 14-day Trial',
        pricingImage: pricnigImage
    },
]

</script>

<template>
    <section class="pricing">
        <div class="container">
            <h1 class="pricing__title">Choose the plan that's right for you.</h1>
            <div class="pricing__cards">
                <Card v-for="item in pricing" :key="item.id" :info="item" />
            </div>
            <Started/>
            <Footer/>
        </div>
    </section>
</template>
