<template>
  <div>
    <debug-info v-bind:enableTailwindcss="true" v-if="isNotProduction" />

    <section class="relative h-screen">
      <div class="w-full h-screen bg-center bg-cover hero-bg-img">
        <div class="absolute w-full h-screen bg-black bg-opacity-25"></div>
        <h1 class="absolute w-full text-6xl font-bold text-center text-white hero-cover xl:text-7xl">
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
      site_domain: 'example.com',
      instagram_id: 'and.018',
      isNotProduction: false,
      description: '鹿児島県出水市の'+site_name+' ('+site_kana+') です。',
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
    this.isNotProduction = (window.location.hostname != this.site_domain)
  },
  methods: {
    setScrollTrigger() {
      gsap.registerPlugin(ScrollTrigger);

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
