<template>
  <scrollactive
    ref="scrollactive"
    v-bind:offset="headerOffset"
    v-bind:always-track="vueScrollactive.alwaysTrack"
    v-bind:duration="vueScrollactive.duration"
    v-bind:click-to-scroll="vueScrollactive.clickToScroll"
    v-bind:bezier-easing-value="vueScrollactive.easing"
    class="bg-gray-500 h-18 bg-opacity-0"
    v-bind:class="{ 'bg-opacity-75': opacityHeader }"
  >
    <!--
    <ul class="flex flex-wrap justify-end pt-2 mr-0 sm:mr-2 lg:mr-4 lg:pt-1">
    -->
    <ul class="flex flex-wrap justify-end pt-2 lg:pt-1">
      <li
        v-if="opacityHeader"
        class="mr-auto"
        v-bind:class="[
          enableLineBreak ? 'w-full' : 'w-auto',
          {'lg:w-auto': enableLineBreak}
        ]"
      >
        <ul class="flex justify-end">
          <li class="mr-auto">
            <template v-if="path=='/'">
              <a
                v-scroll-to="'body'"
                v-on:click="scrollToTop"
                class="pl-2 text-lg font-bold text-gray-900 cursor-pointer md:text-2xl lg:pl-8 sm:pl-4 md:pl-6 hover:text-gray-600"
              >
                {{ site_name }}
              </a>
            </template>
            <template v-else>
              <nuxt-link
                to="/"
                class="pl-2 text-lg font-bold text-gray-900 md:text-2xl lg:pl-8 sm:pl-4 md:pl-6 hover:text-gray-600"
              >
                {{ site_name }}
              </nuxt-link>
            </template>
          </li>

          <template v-for="(item, index) in menuData">
            <li v-if="item.name=='Instagram' && opacityHeader"
              v-bind:class="enableLineBreak ? 'sm:hidden' : 'hidden'"
            >
              <iconlink-instagram
                v-bind:username="instagram_id"
                v-bind:opacityHeader="opacityHeader"
              />
            </li>
            <li v-else-if="item.name=='Facebook' && opacityHeader"
              v-bind:class="enableLineBreak ? 'sm:hidden' : 'hidden'"
            >
              <iconlink-facebook
                v-bind:pageid="facebook_id"
                v-bind:opacityHeader="opacityHeader"
              />
            </li>
          </template>
        </ul>
      </li>

      <template v-for="(item, index) in menuData">
        <li v-if="item.href=='/'">
          <header-textlink
            v-if="opacityHeader"
            v-bind:name="item.name"
            v-bind:href="item.href"
            v-bind:opacityHeader="opacityHeader"
            v-bind:enableScrollactive="false"
          />
        </li>
        <li v-else-if="item.name=='Instagram'"
          v-bind:class="[
            {hidden: enableLineBreak},
            {'sm:inline-block': enableLineBreak}
          ]"
        >
          <iconlink-instagram
            v-bind:username="instagram_id"
            v-bind:opacityHeader="opacityHeader"
          />
        </li>
        <li v-else-if="item.name=='Facebook'"
          v-bind:class="[
            {hidden: enableLineBreak},
            {'sm:inline-block': enableLineBreak}
          ]"
        >
          <iconlink-facebook
            v-bind:pageid="facebook_id"
            v-bind:opacityHeader="opacityHeader"
          />
        </li>
        <li v-else
          v-bind:class="{ flex: item.new }"
        >
          <span v-if="item.new" class="text-xs font-bold text-red-500">NEW</span>
          <header-textlink
            v-bind:name="item.name"
            v-bind:href="item.href"
            v-bind:opacityHeader="opacityHeader"
            v-bind:enableScrollactive="true"
          />
        </li>
      </template>
    </ul>
  </scrollactive>
</template>

<script>
export default {
  scrollToTop: true,
  props: {
    site_name: {
      type: String,
      required: true,
    },
    instagram_id: {
      type: String,
      required: false,
    },
    facebook_id: {
      type: String,
      required: false,
    },
    opacityHeader: {
      type: Boolean,
      required: true,
    },
    menuData: {
      type: Array,
      required: true,
    },
    headerOffset: {
      type: Number,
      required: true,
    },
    enableLineBreak: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      vueScrollactive: {
        alwaysTrack: false,
        duration: 600,
        clickToScroll: true,
        easing: '.5,0,.35,1',
      },
      path: "",
    }
  },
  mounted: function() {
    this.path = window.location.pathname;
  },
  methods: {
    scrollToTop() {
      if (location.hash.length > 0) {
        history.pushState(null, null, location.pathname);
      }
    },
  },
}
</script>

<style scoped>
/* vue-scrollactive */
.is-active {
  text-decoration: underline;
}
</style>
