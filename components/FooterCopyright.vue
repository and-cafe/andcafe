<template>
  <!--
  <footer class="h-auto p-4 mx-auto mb-16 text-center md:mb-0 xl:max-w-screen-xl">
  -->
  <footer class="h-auto p-4 mx-auto mb-16 text-center xl:max-w-screen-xl">
    &copy; {{ name }}
    <span class="text-xs" v-if="showPoweredBy">Powered by <a href="https://izumi.love/" target="_blank" rel="noopener">イズミラヴ</a></span>
  </footer>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    showPoweredBy: {
      type: Boolean,
      required: false,
      default: true,
    },
  }
}
</script>
