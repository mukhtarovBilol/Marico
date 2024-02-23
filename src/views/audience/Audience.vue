<script setup>
import Button from '@/components/UI/button/Button.vue';
import ClientContent from '@/components/UI/clientContent/ClientContent.vue';
import Steps from '@/components/UI/steps/Steps.vue';
</script>

<template>
    <section class="audience">
        <div class="container">
            <div class="audience__desc">
                <Steps stepNumber="3" title="Send Emails & Text Messages" txt="No more going through a social platform. Reach and engage your audience directly over email and text massage."/>
            </div>
            <div class="audience__content">
                <div class="audience__content-desc">
                    <ClientContent txt="Create & Share" title="Reach Your Audience" span="Directly." subtitle="Embed content or create something new to share." subtitle2="Share content over email, text message or your homepage."/>
                    <div class="audience__content-btns">
                        <RouterLink to="/pricing" class="audience__content-btn">
                            <Button txt="Get Started Now" class="audience__content-button" />
                        </RouterLink>
                        <RouterLink to="/blog" class="audience__content-btn2">
                            <Button txt="View A Demo" class="audience__content-button2" />
                        </RouterLink>
                    </div>
                </div>
                <img src="@/assets/image/audience/Screen.png" alt="" class="audience__content-image">
            </div>
        </div>
    </section>
</template>

