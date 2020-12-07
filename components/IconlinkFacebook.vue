<template>
  <a
    v-bind:href="'https://www.facebook.com/'+pageid"
    target="_blank"
    rel="noopener"
    v-on:click="gaEvent('Facebook')"
  >
    <svg
      class="w-8 h-8 text-white fill-current md:w-10 md:h-10 hover:text-gray-400"
      v-bind:class="[{ 'text-gray-900': opacityHeader }, { 'hover:text-gray-600': opacityHeader }]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592	c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20	c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z"/>
      <!--
      <path d="M12.001,2.002c-5.522,0-9.999,4.477-9.999,9.999c0,4.99,3.656,9.126,8.437,9.879v-6.988h-2.54v-2.891h2.54V9.798	c0-2.508,1.493-3.891,3.776-3.891c1.094,0,2.24,0.195,2.24,0.195v2.459h-1.264c-1.24,0-1.628,0.772-1.628,1.563v1.875h2.771	l-0.443,2.891h-2.328v6.988C18.344,21.129,22,16.992,22,12.001C22,6.479,17.523,2.002,12.001,2.002z"/>
      -->
    </svg>
  </a>
</template>

<script>
export default {
  props: {
    opacityHeader: {
      type: Boolean,
      required: true,
    },
    pageid: {
      type: String,
      required: true,
    },
  },
  methods: {
    gaEvent(action) {
//      this.$ga.event({
//        eventCategory: 'header',
//        eventAction: action,
//      });
    }
  },
}
</script>
