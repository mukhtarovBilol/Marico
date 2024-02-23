<script setup>
import Header from "@/layout/header/Header.vue";
import Creators from "@/views/creators/CreatorsView.vue";
import ClientHomepage from '@/views/clientHomepage/ClientHomepage.vue';
import ShareHomepage from '@/views/shareHomepage/ShareHomepage.vue';
import Audience from '@/views/audience/Audience.vue';
import Agree from '@/views/agree/Agree.vue';
import Helped from '@/views/helped/Helped.vue';
import Started from '@/components/UI/started/Started.vue';
import Footer from '@/layout/footer/Footer.vue';
</script>

<template>
    <Header/>
    <main>
      <Creators/>
      <ClientHomepage/>
      <ShareHomepage/>
      <Audience/>
      <Agree/>
      <Helped/>
      <Started/>
    </main>
    <Footer/>
</template>
