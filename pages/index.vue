<template>
  <div>
    <debug-info v-bind:enableTailwindcss="true" v-if="isNotProduction" />
    <button-scroll-to-top v-bind:showButton="vueScrollto.showScrollToTopButton" />

    <header class="fixed z-10 w-full" ref="headerElm" id="header">
      <header-menu
        v-bind:site_name="site_name"
        v-bind:instagram_id="instagram_id"
        v-bind:opacityHeader="opacityHeader"
        v-bind:menuData="menuData"
        v-bind:enableLineBreak="false"
        v-bind:headerOffset="headerOffset"
      />
    </header>

    <hero-header-parallax
      v-bind:site_name="site_name"
    />

    <main class="relative w-full bg-white">
      <section class="mx-auto xl:max-w-screen-xl">
        <section-info
          v-bind:instagram_id="instagram_id"
          v-bind:holidays="holidays"
        />

        <section-access />

        <section-menus
          v-bind:menus="menus"
        />

        <section class="min-h-screen">
          <section-coupons
            v-bind:isCoupons="isCoupons"
          />

          <footer-copyright v-bind:name="site_name" />
        </section>
      </section>
    </main>

  </div>
</template>

<script>
import { gsap } from "gsap";
//import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { lazysizes } from "lazysizes";

import menusJSON from '~/assets/json/menus.json'
import headerJSON from '~/assets/json/header.json'

export default {
  async fetch() {
    const apiData = await fetch(
      // Project version 4
      'https://script.google.com/macros/s/AKfycbwh2OdKgHsNz5NeCbZ5APaPVQ8rrQCBG8qHWrEk1he3aVPVK_4u/exec',
    ).then(res => res.json())

    this.holidays = apiData.holidays;
  },
  data() {
    const site_name = 'and cafe';
    const site_kana = 'アンドカフェ';
    const instagram_id = 'and.018';

    return {
      enableCoupon: true,
      menus: menusJSON,
      menuData: headerJSON,
      holidays: [],
      site_name: site_name,
      site_kana: site_kana,
      site_domain: 'andcafe.shop',
      instagram_id: instagram_id,
      isNotProduction: false,
      description: '鹿児島県出水市の'+site_name+' ('+site_kana+') です。タピオカドリンクやフラッペ・シェイクなどをテイクアウトで販売しています。',
      vueScrollto: {
        showScrollToTopButton: false,
      },
      headerOffset: 0,
      opacityHeader: false,
      opacityHeaderHeight: 0,
      isCoupons: false,
    }
  },
  head () {
    return {
      htmlAttrs: {
        lang: 'ja'
      },
      title: this.site_name + ' | ' + this.site_kana,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'og:site_name', property: 'og:site_name', content: this.site_name },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://' + this.site_domain + '/' },
        { hid: 'og:title', property: 'og:title', content: this.site_name + ' | ' + this.site_kana },
        { hid: 'og:description', property: 'og:description', content: this.description },
        { hid: 'og:image', property: 'og:image', content: 'https://' + this.site_domain + '/images/main01.jpg' },
        { name: 'twitter:card', content: 'summary' },
      ],
//      link: [
//        { rel: 'preload', href: '/images/coupon01.jpg', as: 'image', type: 'image/jpeg' },
//      ],
      script: [
        { src: 'https://unpkg.com/dayjs' },
        { src: 'https://unpkg.com/dayjs/locale/ja.js' },
      ],
    }
  },
  mounted: function() {
    this.setScrollTriggers();
    this.getHeight();
    this.isNotProduction = (window.location.hostname != this.site_domain)
    window.addEventListener('scroll', this.calculateScrollY);
  },
  updated: function() {
    this.getHeight();
  },
  beforeDestroy: function() {
    window.removeEventListener('scroll', this.calculateScrollY);
  },
  methods: {
    setScrollTrigger(target) {
      gsap.from(target, {
        duration: 2,
        opacity: 0,
        scrollTrigger: {
          trigger: target,
          toggleActions: "restart none none none"
        }
      });
    },
    setScrollTriggers() {
      gsap.registerPlugin(ScrollTrigger);
      this.setScrollTrigger('#header');
      this.setScrollTrigger('#site_name');
      this.setScrollTrigger('#info');
      this.setScrollTrigger('#info_detail');
      this.setScrollTrigger('#access');
      this.setScrollTrigger('#menus');
      this.setScrollTrigger('#special');
      this.setScrollTrigger('#tapioca');
      this.setScrollTrigger('#frappe');
      this.setScrollTrigger('#shake');
      this.setScrollTrigger('#hotsandwich');
      this.setScrollTrigger('#honeytoast');
      this.setScrollTrigger('#potato');
      this.setScrollTrigger('#miniparfait');
      this.setScrollTrigger('#topping');
      this.setScrollTrigger('#coupons');
      this.setScrollTrigger('#footer');
    },
    calculateScrollY() {
      this.scrollY = window.scrollY;
      if (this.scrollY > 200) {
        this.vueScrollto.showScrollToTopButton = true
      } else {
        this.vueScrollto.showScrollToTopButton = false
      }

      if (this.scrollY > this.opacityHeaderHeight) {
        this.opacityHeader = true
      } else {
        this.opacityHeader = false
      }
    },
    getHeight() {
      this.headerOffset = this.$refs.headerElm.clientHeight;
      this.opacityHeaderHeight = window.innerHeight - this.$refs.headerElm.clientHeight - 1;
    },
  },
}
</script>
