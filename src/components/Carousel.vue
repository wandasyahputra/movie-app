<template>
  <swiper
    :slides-per-view="2.5"
    :space-between="50"
    :centeredSlides="true"
    :loop="true"
    navigation
    class="w-full"
  >
    <swiper-slide v-for="item in data?.slice(0, 20)" :key="item.id"
      ><slide-card :movie="item"
    /></swiper-slide>
  </swiper>
</template>
<style scooped>
.swiper-slide {
  transform: scale(0.8);
  opacity: 0.5;
  transition: 0.7s;
}
.swiper-slide-active {
  transform: scale(1);
  opacity: 1;
}
</style>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import SlideCard from "./SlideCard.vue";

export default {
  props: ["data"],
  components: {
    Swiper,
    SwiperSlide,
    SlideCard,
  },
};
</script>
