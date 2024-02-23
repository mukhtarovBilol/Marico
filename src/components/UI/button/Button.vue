<script setup>
defineProps(["txt"]);
</script>

<template>
  <a href="#!" class="btn">{{ txt }}</a>
</template>

<style lang="scss" scoped>
.btn {
  max-width: 207px;
  width: 100%;
  padding: 18px 20px;
  text-align: center;
  border-radius: 12px;
  display: inline-block;
  font-size: 20px;
}

@media (max-width: 375px) {
  .btn {
    font-size: 14px;
  }
}

</style>
