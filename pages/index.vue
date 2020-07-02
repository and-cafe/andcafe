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
  </div>
</template>

<script>
export default {
  data() {
    const site_name='and cafe',
      site_kana= 'アンドカフェ';

    return {
      site_name: site_name,
      site_kana: site_kana,
      site_domain: 'example.com',
      isNotProduction: false,
    }
  },
  head () {
    return {
      htmlAttrs: {
        lang: 'ja'
      },
      title: this.site_name + ' | ' + this.site_kana,
    }
  },
  mounted: function() {
    this.isNotProduction = (window.location.hostname != this.site_domain)
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
</style>
