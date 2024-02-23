<script setup>
import Button from '@/components/UI/button/Button.vue';
import Steps from '@/components/UI/steps/Steps.vue';
</script>

<template>

    <section class="share">
        <div class="container">
            <Steps 
            stepNumber="2"
            title="Share Your Homepage"
            txt="Share your Wavium homepage link with your followers, and we'll handle the rest."
            />
            <div class="share__cards">
                <div class="share__card">
                    <p class="share__card-txt">One Link</p>
                    <h3 class="share__card-title">ALL You Create. <span>One Link</span> </h3>
                    <img src="@/assets/image/shareHomepage/Mobile.png" alt="" class="share__card-image">
                </div>
                <div class="share__card">
                    <p class="share__card-txt2">Collect Subscribers</p>
                    <h3 class="share__card-title2">Emails. Phone #s. <span>All Yours.</span> </h3>
                </div>
            </div>
            <RouterLink to="/pricing" class="share__started"> 
                <Button txt="Get Started" class="share__btn"/>
            </RouterLink>
        </div>
    </section>

</template>

