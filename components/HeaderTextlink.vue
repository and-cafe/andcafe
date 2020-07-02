<template>
  <a
    v-bind:href="href"
    class="pr-2 text-lg font-bold text-white md:text-2xl md:pr-4 lg:pr-8 sm:pr-4 scrollactive-item hover:text-gray-400"
    v-bind:class="[{ 'text-gray-900': opacityHeader }, { 'hover:text-gray-600': opacityHeader }]"
  >
    {{ name.substring(0, 1) }}<span class="text-xs sm:text-lg md:text-2xl">{{ name.substring(1, name.length) }}</span>
  </a>
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
    }
  }
}
</script>
