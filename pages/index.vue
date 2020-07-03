<template>
  <div>
    <debug-info v-bind:enableTailwindcss="true" v-if="isNotProduction" />
    <button-scroll-to-top v-bind:showButton="vueScrollto.showScrollToTopButton" />

    <header class="fixed z-10 w-full" ref="headerElm" id="header">
      <div class="bg-gray-500 h-18 bg-opacity-0" v-bind:class="{ 'bg-opacity-75': opacityHeader }">
        <scrollactive
          ref="scrollactive"
          v-bind:offset="vueScrollactive.offset"
          v-bind:always-track="vueScrollactive.alwaysTrack"
          v-bind:duration="vueScrollactive.duration"
          v-bind:click-to-scroll="vueScrollactive.clickToScroll"
          v-bind:bezier-easing-value="vueScrollactive.easing"
        >
          <ul class="flex flex-wrap justify-end pt-2 lg:pt-1">
            <li v-if="opacityHeader" class="w-full mr-auto lg:w-auto">
              <div class="flex justify-end">
                <li class="mr-auto">
                  <a
                    v-scroll-to="'body'"
                    class="pl-2 text-lg font-bold text-gray-900 cursor-pointer md:text-2xl lg:pl-8 sm:pl-4 md:pl-6 hover:text-gray-600"
                    v-on:click="scrollToTop"
                  >
                    {{ site_name }}
                  </a>
                </li>
                <li class="sm:hidden" v-if="opacityHeader">
                  <iconlink-instagram v-bind:username="instagram_id" v-bind:opacityHeader="opacityHeader" />
                </li>
                <li class="sm:hidden" v-if="opacityHeader">
                  <iconlink-facebook pageid="gorillakitchen.jp" v-bind:opacityHeader="opacityHeader" />
                </li>
              </div>
            </li>
            <li>
              <header-textlink name="INFO" href="#info" v-bind:opacityHeader="opacityHeader" />
            </li>
            <li>
              <header-textlink name="ACCESS" href="#access" v-bind:opacityHeader="opacityHeader" />
            </li>
            <li>
              <header-textlink name="MENU" href="#menus" v-bind:opacityHeader="opacityHeader" />
            </li>
            <li>
              <header-textlink name="COUPON" href="#coupons" v-bind:opacityHeader="opacityHeader" />
            </li>
            <li class="hidden sm:inline-block">
              <iconlink-instagram v-bind:username="instagram_id" v-bind:opacityHeader="opacityHeader" />
            </li>
            <li class="hidden sm:inline-block">
              <iconlink-facebook pageid="gorillakitchen.jp" v-bind:opacityHeader="opacityHeader" />
            </li>
          </ul>
        </scrollactive>
      </div>
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
            <img src="/images/main01.jpg" class="rounded-lg">
          </div>

          <div class="px-2 col-span-2 lg:px-8">
            <h2 class="text-3xl font-bold text-gray-900 md:text-5xl">INFORMATION</h2>
            <div class="m-4">
              <p>2020年7月に移転オープンしたand cafe (アンドカフェ)です。</p>
              <p>2020年6月まで阿久根市にて営業しておりました。</p>
              <p>最新情報はInstagramでご覧いただけます。</p>
            </div>

            <dl class="flex flex-wrap mx-4 mt-4 scrollFadeIn" id="info_detail">
              <dt class="w-1/3 mb-2 font-bold md:w-1/4">営業時間</dt>
              <dd class="w-2/3 mb-2 md:w-3/4">
                11:00-17:30
              </dd>
              <dt class="w-1/3 mb-2 font-bold md:w-1/4">定休日</dt>
              <dd class="w-2/3 mb-2 md:w-3/4">
                水曜日 & 第3日曜日
              </dd>
              <dt class="w-1/3 mb-2 font-bold md:w-1/4">Instagram</dt>
              <dd class="w-2/3 mb-2 md:w-3/4">
                <div><a v-bind:href="'https://www.instagram.com/'+instagram_id" target    ="_blank" rel="noopener">@{{ instagram_id }}</a></div>
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
                <div>鹿児島県出水市高尾野町大久保3758</div>
                <a href="https://g.page/gorillakitchen-jp?gm" target="_blank" rel="noopener" class="button--grey">地図を開く</a>
              </dd>
            </dl>
          </div>

          <div class="bg-gray-500 col-span-1 lg:col-span-2">
            <div class="relative h-0 overflow-hidden bg-gray-300 aspect-16x9">
              <iframe class="absolute inset-0 w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.2347452253975!2d130.31359865839715!3d32.06289899883038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x353fb6077c4facdb%3A0x56bc6c1a000f4c8a!2z44Kr44Oz44OI44Oq44O844OA44Kk44OL44Oz44Kw44OQ44O844O744K144Km44Oz44OJ44Ot44Kx44OD44OI!5e0!3m2!1sja!2sjp!4v1593613821800!5m2!1sja!2sjp" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
          </div>
        </div>

      </section>

      <section id="menus" class="h-screen p-2 lg:p-8">
        <h2 class="text-3xl font-bold text-gray-900 md:text-5xl">MENU</h2>
      </section>

      <section id="coupons" class="h-screen p-2 lg:p-8">
        <h2 class="text-3xl font-bold text-gray-900 md:text-5xl">COUPONS</h2>
      </section>

      <footer-copyright v-bind:name="site_name" />
    </main>

  </div>
</template>

<script>
import { gsap } from "gsap";
//import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default {
  data() {
    const site_name='and cafe',
      site_kana= 'アンドカフェ';

    return {
      site_name: site_name,
      site_kana: site_kana,
      site_domain: 'vibrant-shannon-0d7887.netlify.app',
      instagram_id: 'and.018',
      isNotProduction: false,
      description: '鹿児島県出水市の'+site_name+' ('+site_kana+') です。',
      vueScrollto: {
        showScrollToTopButton: false,
      },
      vueScrollactive: {
        alwaysTrack: false,
        duration: 600,
        clickToScroll: true,
        offset: 0,
        easing: '.5,0,.35,1',
      },
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
        { hid: 'og:image', property: 'og:image', content: 'https://' + this.site_domain + '/images/logo.jpg' },
        { name: 'twitter:card', content: 'summary' },
      ],
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
      gsap.from("#coupons", {
        y: 30,
        duration: 2,
        opacity: 0,
        scrollTrigger: {
          trigger: "#coupons",
          toggleActions: "restart none none none"
        }
      });
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
      this.vueScrollactive.offset = this.$refs.headerElm.clientHeight;
      this.opacityHeaderHeight = this.$refs.heroElm.clientHeight - this.$refs.headerElm.clientHeight - 1;
    },
    scrollToTop() {
      if (location.hash.length > 0) {
        history.pushState(null, null, location.pathname);
      }
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

/* vue-scrollactive */
.is-active {
  text-decoration: underline;
}
</style>
