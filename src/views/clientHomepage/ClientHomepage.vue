<script setup>
import ClientContent from "@/components/UI/clientContent/ClientContent.vue";
import Steps from "@/components/UI/steps/Steps.vue";
import Button from '@/components/UI/button/Button.vue';
</script>

<template>
  <section class="client">
    <div class="container">
      <div class="client__desc">
        <Steps
          stepNumber="1"
          title="Connect Your Content"
          txt="Bring all of your content together and get a Homepage that
            automatically updates whenever you create anywhere online."
        />
        <RouterLink to="/blog" class="client__homepage-btn">View Avaliable Sources</RouterLink>
      </div>
      <div class="client__content">
        <div class="client__content-desc">
          <ClientContent
            txt="Your Homepage"
            title="Your Content. All in"
            span=" One Spot"
            subtitle="Bring all of your content together into one homepage."
            subtitle2="Your page automatically updates whenever you create."
          />
          <div class="client__content-btns">
            <RouterLink to="/pricing">
              <Button txt="Get Started Now" class="client__content-btn" />
            </RouterLink>
            <RouterLink to="/blog">
              <Button txt="View A Demo" class="client__content-btn2" />
            </RouterLink>  
          </div>
        </div>
        <img src="@/assets/image/clientHomepage/Screen.png" alt="" class="client__content-image">
      </div>
    </div>
  </section>
</template>
