<script setup>

// import Nav from '@/components/UI/nav/Nav.vue';
import Username from '@/assets/image/signUp/Username.vue';
import Email from '@/assets/image/signUp/Email.vue';
import Password from '@/assets/image/signUp/Password.vue';
import Facebook from '@/assets/image/signUp/Facebook.vue';
import Google from '@/assets/image/signUp/Google.vue';
import Apple from '@/assets/image/signUp/Apple.vue';

defineProps(['title', 'txt', 'button', 'withTxt', 'withSign', 'bottomTxt'])

</script>

<template>
    <section class="registration">
        <!-- <Nav/> -->
        <div class="container">
            <div class="registration__desc">
                <h3 class="registration__title">{{ title }}</h3>
                <p class="registration__txt">{{ txt }}</p>
            </div>
            <form action="" class="registration__form">
                <div class="registration__form-input">
                    <input type="text" class="registration__input" placeholder="Username" required >
                    <Username/>
                </div>
                <div class="registration__form-input">
                    <input type="email" class="registration__input" placeholder="Email Address" required>
                    <Email/>
                </div>
                <div class="registration__form-input">
                    <input type="password" class="registration__input" placeholder="Password" required >
                    <Password/>
                </div>
                <button class="registration__btn">{{ button }}</button>
            </form>
            <div class="registration__with">
                <h3 class="registration__with-title">Or</h3>
                <p class="registration__with-txt">{{ withTxt }}</p>
                <div class="registration__signUp">
                    <p class="registration__signUp-txt">
                        <Facebook/>
                        {{ withSign }} with Facebook
                    </p>
                    <p class="registration__signUp-txt">
                        <Google/>
                        {{ withSign }} with Google
                    </p>
                    <p class="registration__signUp-txt">
                        <Apple/>
                        {{ withSign }} with Apple
                    </p>
                </div>
                <p class="registration__bottom-txt">{{ bottomTxt }}</p>
            </div>
        </div>
    </section>
</template>

