<script setup>
import Started from "@/components/UI/started/Started.vue";
import Footer from "@/layout/footer/Footer.vue";

import { image1, image2, image3 } from "@/helper/images.js";
import icon from "@/assets/image/about/icon.svg";
import Card from "@/components/UI/card/Card.vue";

const creators = [
  {
    aboutImg: image1,
    aboutTitle: "Jacob Mark",
    aboutTxt: "CEO & Design",
    aboutSocial: "Twitter",
    icon: icon,
  },
  {
    aboutImg: image2,
    aboutTitle: "Daniel",
    aboutTxt: "CTO & Development",
    aboutSocial: "Twitter",
    icon: icon,
  },
  {
    aboutImg: image3,
    aboutTitle: "Ryan Trump",
    aboutTxt: "COO & Sales",
    aboutSocial: "Twitter",
    icon: icon,
  },
];
</script>

<template>
  <section class="about">
    <div class="container">
      <a href="/" class="about__logo">
        <img
          src="@/assets/image/nav/logo.svg"
          alt=""
          class="about__logo-image"
        />
        Marico
      </a>
      <div class="about__desc">
        <p class="about__desc-subtitle">OUR MISSION</p>
        <h3 class="about__desc-title">
          We exist to help creators own their audience.
        </h3>
        <p class="about__desc-txt">
          We believe that social platforms are taking advantage of creators. We
          want to change that and help creators fight back.
        </p>
      </div>
      <p class="about__txt2">
        Building a career on social platforms is like building a home on someone
        else's land. While social platforms are great for discovering and
        reaching your audience, your goal as a creator should be to convert your
        followers into email or text message subscribers. Why? Look no further
        than TikTok. Almost overnight, millions of creative people almost lost
        their careers. <br /><br />If a platform removes your account, or their
        algorithm for distribution no longer favours you, are you prepared?
        <br /><br />
        If you want to build a career as a creator, your focus should be on
        building durable distribution channels. Without distribution, you have
        no business. So how can you build an audience that you actually own?
        With emails and phone numbers. These distribution channels are direct.
        Instead of going through some algorithm, when you share over email and
        text message, you know that your audience will see your content. Even
        better is the fact that you own these lists. Instagram removes your
        acount, you're ok. YouTube changes their algorithm, you're ok. You own
        your audience. <br />
        <br />
        We built Marico to make this process easy, fast, and effective. The
        traditional solution to this problem involves spending days building a
        website or hiring someone expensive to do it for you. But those days are
        gone. With Marico, you get a portfolio that is always up-to-date and
        converts visitors into email or text message subscribers. The best
        thing? It takes under 5 minutes to setup, and it automatically updates
        whenever you post new content anywhere online. We believe the best tools
        are the ones you don't even notice. Marico helps you build your own
        audience, without any hassle or time commitment. All you have to do is
        share your portfolio link with your audience, and we'll handle the rest.
        <br /><br />
        You can also create posts from within Marico and share them in just a
        few clicks to your portfolio, and to your email and text message
        subscribers. Since all of your content is already in Marico, creating
        content takes minutes, not hours. <br />
        <br />
        For too long, social platforms have taken advantage of creators. Fight
        back and build an audience that you own. <br />
        <br />
        <span> - The Team Marico (Olivia, William, and Noah) </span>
      </p>
      <div class="about__creators">
        <p class="about__creators-txt">OUR TEAM</p>
        <h3 class="about__creators-title">We love creators</h3>
        <div class="about__creators-cards">
          <Card v-for="item in creators" :key="item.id" :info="item" />
        </div>
      </div>
      <Started />
      <Footer />
    </div>
  </section>
</template>
