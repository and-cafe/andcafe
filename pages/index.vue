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
        v-bind:headerOffset="headerOffset"
      />
    </header>

    <section class="relative h-screen">
      <div class="w-full h-screen bg-center bg-cover hero-bg-img" ref="heroElm">
        <div class="absolute w-full h-screen bg-black bg-opacity-25"></div>
        <h1 class="absolute w-full text-6xl font-bold text-center text-white hero-cover xl:text-7xl" id="site_name">
          {{ site_name }}
        </h1>
      </div>
    </section>

    <main class="relative mx-auto xl:max-w-screen-xl">
      <section id="info" class="scrollFadeIn">
        <div class="p-2 lg:p-8 grid grid-cols-2 sm:grid-cols-3">
          <div class="hidden rounded-lg sm:col-span-1 sm:block">
            <img data-src="/images/main01.jpg" class="rounded-lg lazyload">
          </div>

          <div class="px-2 col-span-2 lg:px-8">
            <h2 class="text-3xl font-bold text-gray-900 md:text-5xl">INFORMATION</h2>
            <div class="m-4">
              <p>2020年7月26日に出水市へ移転オープンするand cafe (アンドカフェ)です。</p>
              <p>(2020年6月末まで阿久根市にて営業しておりました)</p>

              <p class="pt-4">タピオカドリンクやフラッペ・シェイクなどのドリンクスイーツを、テイクアウト販売しております。</p>
              <p>その他にハンドメイドのドライフラワーやピアス・イアリングなど販売しております。</p>

              <p class="pt-4">最新情報はInstagramでご覧いただけます。</p>
            </div>

            <dl class="flex flex-wrap mx-4 mt-4 scrollFadeIn" id="info_detail">
              <dt class="w-1/3 mb-2 font-bold md:w-1/4">営業時間</dt>
              <dd class="w-2/3 mb-2 md:w-3/4">
                11:00-17:00
              </dd>
              <dt class="w-1/3 mb-2 font-bold md:w-1/4">店休日</dt>
              <dd class="w-2/3 mb-2 md:w-3/4">
                <div>第3日曜日 &amp; 不定休</div>

                <div
                  v-if="holiday"
                  class="text-sm font-bold text-red-500"
                >
                  ※次回店休日は{{ holiday }}です。
                </div>
                <div
                  v-else
                  class="text-sm"
                >
                  (最新の店休日情報はInstagramをご確認ください)
                </div>
              </dd>
              <dt class="w-1/3 mb-2 font-bold md:w-1/4">Instagram</dt>
              <dd class="w-2/3 mb-2 md:w-3/4">
                <div><a v-bind:href="'https://www.instagram.com/'+instagram_id" target="_blank" rel="noopener">@{{ instagram_id }}</a></div>
                <a v-bind:href="'https://www.instagram.com/'+instagram_id" target="_blank" rel="noopener" class="button--grey">Instagramを開く</a>
              </dd>
            </dl>
          </div>
        </div>
      </section>

      <section id="access" class="scrollFadeIn">
        <!--
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          -->
        <div class="grid grid-cols-1 lg:grid-cols-3">
          <div class="p-2 lg:p-8 col-span-1">
            <div class="text-3xl font-bold text-gray-900 md:text-5xl">ACCESS</div>

            <dl class="flex flex-wrap m-4">
              <dt class="w-1/3 mb-2 font-bold md:w-1/4">住所</dt>
              <dd class="w-2/3 mb-2 md:w-3/4">
                <div>鹿児島県出水市高尾野町大久保3756</div>
                <div class="text-sm">(サウンドロケットさんの隣です)</div>
                <a
                  href="https://g.page/andcafe-shop?gm"
                  target="_blank"
                  rel="noopener"
                  class="button--grey"
                >地図を開く</a>
              </dd>
              <dt class="w-1/3 mb-2 font-bold md:w-1/4">駐車場</dt>
              <dd class="w-2/3 mb-2 md:w-3/4">
                あり
              </dd>
            </dl>
          </div>

          <div class="bg-gray-500 col-span-1 lg:col-span-2">
            <div class="relative h-0 overflow-hidden bg-gray-300 aspect-16x9">
              <iframe class="absolute inset-0 w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d845.3068167466354!2d130.31520178811914!3d32.06310129881883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x353fb5166de689c1%3A0x55d62d9ee8726d69!2sand%20cafe!5e0!3m2!1sja!2sjp!4v1595234962384!5m2!1sja!2sjp" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" title="and cafeの地図"></iframe>
            </div>
          </div>
        </div>

      </section>

      <section id="menus" class="p-2 lg:p-8">
        <h2 class="text-3xl font-bold text-gray-900 md:text-5xl">MENU</h2>

        <section>
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            <menu-price title="SPECIAL" color="bg-yellow-500" v-bind:menuData="menus.special" />
            <menu-price-item-list title="TAPIOCA" color="bg-yellow-500" v-bind:menuData="menus.tapioca" />
            <menu-price-item-list title="FRAPPE" color="bg-yellow-500" v-bind:menuData="menus.frappe" />
            <menu-price-item-list title="SHAKE" color="bg-yellow-500" v-bind:menuData="menus.shake" />
            <menu-price-item-list title="TOPPING" color="bg-yellow-500" v-bind:menuData="menus.topping" />
          </div>
        </section>

      </section>

      <section id="coupons" class="min-h-screen p-2 lg:p-8" v-if="enableCoupon">
        <h2 class="text-3xl font-bold text-gray-900 md:text-5xl">COUPONS</h2>

        <div class="p-4">
          <p class="font-bold">現在提供中のクーポンはありません。</p>
          <!--
          <p class="font-bold">ご利用方法</p>
          <p class="pl-4 text-sm">ご注文時にクーポン画面をご提示ください。</p>
          -->
        </div>

        <div class="flex flex-col justify-center lg:flex-row lg:flex-wrap lg:justify-start">
          <!--
          <card-coupon
            annotation="【移転オープン記念】"
            title="100円キャッシュバック"
            note="・Instagramのand cafeアカウント(@and.018)のフォローと、指定したハッシュタグ付きの投稿が確認できた場合にご利用いただけます。
・ドリンクをご注文いただいた際にご利用いただけます。
・他のクーポンとの併用はできません。
・期間中は何度でもご利用いただけます。"
            period="オープン日から2020年7月末まで"
            hashtag="#andcafe移転オープン"
          />
          <card-coupon
            annotation="【移転オープン記念】"
            title="トッピング1つ無料クーポン"
            note="・ドリンクをご注文いただいた際にご利用いただけます。
・他のクーポンとの併用はできません。
・期間中は何度でもご利用いただけます。"
            period="オープン日から2020年7月末まで"
          />
          <card-coupon
            annotation="【移転オープン記念】【平日限定】"
            title="トッピング半額クーポン"
            subtitle="トッピングが半額の￥40でご注文いただけます"
            note="・ドリンクをご注文いただいた際にご利用いただけます。
・期間中は何度でもご利用いただけます。
・土日祝はご利用いただけません。"
            period="2020/8/4(火) 〜 2020/8/7(金)"
          />
          -->
        </div>

        <footer-copyright v-bind:name="site_name" />
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

    this.holiday = this.getHoliday(apiData.holidays);
  },
  data() {
    const site_name = 'and cafe';
    const site_kana = 'アンドカフェ';
    const instagram_id = 'and.018';

    return {
      enableCoupon: true,
      menus: menusJSON,
      menuData: headerJSON,
      holiday: '',
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
    }
  },
  mounted: function() {
    this.setScrollTrigger();
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
    setScrollTrigger() {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from("#header", {
        duration: 2,
        opacity: 0,
        scrollTrigger: {
          trigger: "#header",
          toggleActions: "restart none none none"
        }
      });
      gsap.from("#site_name", {
        y: 30,
        duration: 2,
        opacity: 0,
        scrollTrigger: {
          trigger: "#site_name",
          toggleActions: "restart none none none"
        }
      });
      gsap.from("#info", {
        y: 30,
        duration: 2,
        opacity: 0,
        scrollTrigger: {
          trigger: "#info",
          toggleActions: "restart none none none"
        }
      });
      gsap.from("#info_detail", {
        y: 30,
        duration: 2,
        opacity: 0,
        scrollTrigger: {
          trigger: "#info_detail",
          toggleActions: "restart none none none"
        }
      });
      gsap.from("#access", {
        y: 30,
        duration: 2,
        opacity: 0,
        scrollTrigger: {
          trigger: "#access",
          toggleActions: "restart none none none"
        }
      });
      gsap.from("#menus", {
        y: 30,
        duration: 2,
        opacity: 0,
        scrollTrigger: {
          trigger: "#menus",
          toggleActions: "restart none none none"
        }
      });
      if (this.enableCoupon) {
        gsap.from("#coupons", {
          y: 30,
          duration: 2,
          opacity: 0,
          scrollTrigger: {
            trigger: "#coupons",
            toggleActions: "restart none none none"
          }
        });
      }
      gsap.from("#footer", {
        duration: 2,
        opacity: 0,
        scrollTrigger: {
          trigger: "#footer",
          toggleActions: "restart none none none"
        }
      });
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
      this.opacityHeaderHeight = this.$refs.heroElm.clientHeight - this.$refs.headerElm.clientHeight - 1;
    },
    getHoliday(holidays) {
      let days = this.getEnableHolidays(holidays);

      let ret = [];
      for (const day of days) {
        ret.push(this.formatHoliday(day));
      }
      return ret.join('、');
    },
    formatHoliday(holiday) {
      if (holiday != '') {
        return this.$dayjs(holiday).format('M/D(ddd)');
      } else {
        return '';
      }
    },
    getEnableHolidays(holidays) {
      let ret = [];
      for (let i=0; i < holidays.length; i++) {
        if (this.$dayjs().isSame(holidays[i], 'day')) {
          ret.push(holidays[i]);
        }
        if (this.$dayjs().isBefore(holidays[i], 'day')) {
          ret.push(holidays[i]);
        }
      }
      return ret;
    },
  },
}
</script>

<style scoped>
.hero-bg-img {
  background-image: url('~assets/images/main.jpg');
}

.hero-cover {
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  /* Tailwind CSS Only */
  max-width: initial;
}

.aspect-16x9 {
  padding-bottom: 56.25%;
}
</style>
