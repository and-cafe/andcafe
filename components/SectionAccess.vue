<template>
  <section id="access" class="scrollFadeIn">
    <div class="grid grid-cols-1 lg:grid-cols-3">
      <div class="p-2 lg:p-8 col-span-1">
        <div class="text-3xl font-bold text-gray-900 md:text-5xl">ACCESS</div>

        <dl class="flex flex-wrap m-4">
          <dt class="w-1/3 mb-2 font-bold md:w-1/4">住所</dt>
          <dd class="w-2/3 mb-2 md:w-3/4">
            <div>鹿児島県出水市高尾野町大久保2174-2</div>
            <div class="text-sm">(高尾野コメリの前です)</div>
            <a
              href="https://g.page/andcafe-shop?gm"
              target="_blank"
              rel="noopener"
              class="button--grey"
              v-on:click="gaEvent('map')"
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
</template>

<script>
export default {
  methods: {
    gaEvent(action) {
//      this.$ga.event({
//        eventCategory: 'access',
//        eventAction: action,
//      });
    }
  },
}
</script>

<style scoped>
.aspect-16x9 {
  padding-bottom: 56.25%;
}
</style>
