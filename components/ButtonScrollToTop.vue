<template>
  <transition>
    <a
      v-scroll-to="'body'"
      class="fixed bottom-0 right-0 z-10 w-16 h-16 m-4 text-center bg-gray-500 rounded-full cursor-pointer bg-opacity-75 hover:bg-opacity-50"
      v-on:click="scrollToTop"
      v-if="showButton"
    >
      <svg class="w-16 h-16 text-gray-900 fill-current hover:text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M6.293 13.293L7.707 14.707 12 10.414 16.293 14.707 17.707 13.293 12 7.586z"/>
      </svg>
    </a>
  </transition>
</template>

<script>
export default {
  props: {
    showButton: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    scrollToTop() {
      if (location.hash.length > 0) {
        history.pushState(null, null, location.pathname);
      }
    },
  }
}
</script>

<style scoped>
/* vue-scrollto */
.v-enter {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: all 500ms;
}

.v-leave-to {
  opacity: 0;
}
.v-leave-active {
  transition: all 500ms;
}
</style>
