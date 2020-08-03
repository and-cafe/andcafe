<template>
  <a
    v-if="href.substring(0, 1)=='#'"
    v-bind:href="href"
    class="pr-2 text-lg font-bold text-white md:text-2xl md:pr-4 lg:pr-8 sm:pr-4 hover:text-gray-400"
    v-bind:class="[
      { 'text-gray-900': opacityHeader },
      { 'hover:text-gray-600': opacityHeader },
      { 'scrollactive-item': enableScrollactive }
    ]"
  >
    <upper-text v-bind:name="name" />
  </a>
  <a
    v-else-if="href.substring(0, 1)=='/' && path=='/'"
    v-scroll-to="'body'"
    v-on:click="scrollToTop"
    class="pr-2 text-lg font-bold text-white md:text-2xl md:pr-4 lg:pr-8 sm:pr-4 hover:text-gray-400"
    v-bind:class="[
      { 'text-gray-900': opacityHeader },
      { 'hover:text-gray-600': opacityHeader }
    ]"
  >
    <upper-text v-bind:name="name" />
  </a>
  <nuxt-link
    v-else
    v-bind:to="href"
    class="pr-2 text-lg font-bold text-white md:text-2xl md:pr-4 lg:pr-8 sm:pr-4 hover:text-gray-400"
    v-bind:class="[
      { 'text-gray-900': opacityHeader },
      { 'hover:text-gray-600': opacityHeader }
    ]"
  >
    <upper-text v-bind:name="name" />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    opacityHeader: {
      type: Boolean,
      required: true,
    },
    enableScrollactive: {
      type: Boolean,
      required: true,
    }
  },
  data() {
    return {
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
