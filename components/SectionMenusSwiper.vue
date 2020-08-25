<template>
  <swiper class="swiper" :options="swiperOption">
    <template v-for="(names, category) in menus">
      <template v-for="(name, index) in names">
        <swiper-slide>
          <img
            v-bind:src="getImagePath(category, index)"
            v-bind:alt="name"
          >
        </swiper-slide>
      </template>
    </template>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

import menusSwiperJSON from '~/assets/json/menus_swiper.json'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      menus: menusSwiperJSON,
      swiperOption: {
        slidesPerView: 4,
        centeredSlides: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false
        },
        speed: 1000,
        loop: true,
        breakpoints: {
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 6,
          },
          1024: {
            slidesPerView: 7,
          },
        },
      },
    }
  },
  methods: {
    getImagePath(name, index) {
      return '/images/' + name + (index+1).toString().padStart(2, '0') + '.jpg';
    },
  },
}
</script>
