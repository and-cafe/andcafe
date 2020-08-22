<template>
  <div>
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
      <a
        v-scroll-to="'body'"
        v-on:click="scrollToTop"
        class="pl-2 text-base font-bold text-gray-900 cursor-pointer md:text-xl hover:text-gray-600"
      >
        {{ page_name }}
      </a>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    site_name: {
      type: String,
      required: true,
    },
    page_name: {
      type: String,
      required: false,
    },
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
