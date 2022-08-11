<template>
  <div>
    home
    <n-carousel
        direction="vertical"
        dot-placement="right"
        show-arrow
        style="width: 100%; height: 240px"
    >
      <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
       alt="">
      <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
       alt="">
      <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
       alt="">
      <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
       alt="">
    </n-carousel>
  </div>
</template>

<script>
import { CashOutline as CashIcon } from "@vicons/ionicons5";

export default {

  name: "home",
  components: {
    CashIcon
  }
}
</script>

<style scoped>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
