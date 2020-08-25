<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide><img src="/images/tapioca01.jpg" class="rounded-none lg:rounded-lg"></swiper-slide>
    <swiper-slide><img src="/images/tapioca02.jpg" class="rounded-none lg:rounded-lg"></swiper-slide>
    <swiper-slide><img src="/images/tapioca03.jpg" class="rounded-none lg:rounded-lg"></swiper-slide>
    <swiper-slide><img src="/images/tapioca04.jpg" class="rounded-none lg:rounded-lg"></swiper-slide>
    <swiper-slide><img src="/images/tapioca05.jpg" class="rounded-none lg:rounded-lg"></swiper-slide>
    <swiper-slide><img src="/images/tapioca06.jpg" class="rounded-none lg:rounded-lg"></swiper-slide>
    <swiper-slide><img src="/images/tapioca07.jpg" class="rounded-none lg:rounded-lg"></swiper-slide>
    <swiper-slide><img src="/images/tapioca08.jpg" class="rounded-none lg:rounded-lg"></swiper-slide>
    <swiper-slide><img src="/images/tapioca09.jpg" class="rounded-none lg:rounded-lg"></swiper-slide>
    <swiper-slide><img src="/images/tapioca10.jpg" class="rounded-none lg:rounded-lg"></swiper-slide>
    <swiper-slide><img src="/images/frappe01.jpg" class="rounded-none lg:rounded-lg"></swiper-slide>
    <swiper-slide><img src="/images/frappe02.jpg" class="rounded-none lg:rounded-lg"></swiper-slide>
    <swiper-slide><img src="/images/frappe03.jpg" class="rounded-none lg:rounded-lg"></swiper-slide>
    <swiper-slide><img src="/images/frappe04.jpg" class="rounded-none lg:rounded-lg"></swiper-slide>
    <swiper-slide><img src="/images/frappe05.jpg" class="rounded-none lg:rounded-lg"></swiper-slide>
    <swiper-slide><img src="/images/frappe06.jpg" class="rounded-none lg:rounded-lg"></swiper-slide>
    <swiper-slide><img src="/images/frappe07.jpg" class="rounded-none lg:rounded-lg"></swiper-slide>
    <swiper-slide><img src="/images/frappe08.jpg" class="rounded-none lg:rounded-lg"></swiper-slide>
    <swiper-slide><img src="/images/frappe09.jpg" class="rounded-none lg:rounded-lg"></swiper-slide>
    <swiper-slide><img src="/images/shake01.jpg" class="rounded-none lg:rounded-lg"></swiper-slide>
    <swiper-slide><img src="/images/shake02.jpg" class="rounded-none lg:rounded-lg"></swiper-slide>
    <swiper-slide><img src="/images/shake03.jpg" class="rounded-none lg:rounded-lg"></swiper-slide>
    <swiper-slide><img src="/images/special01.jpg" class="rounded-none lg:rounded-lg"></swiper-slide>
    <swiper-slide><img src="/images/special02.jpg" class="rounded-none lg:rounded-lg"></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <!--
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    -->
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
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
}
</script>
