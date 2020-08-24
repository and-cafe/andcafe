<template>
  <section class="relative sticky top-0 flex items-center justify-center w-full h-screen bg-center bg-cover hero-bg-img">
    <div class="absolute w-full h-screen bg-black bg-opacity-25"></div>
    <h1 class="absolute text-6xl font-bold text-white xl:text-7xl" id="site_name">{{ site_name }}</h1>
    <!--
    <div class="absolute bottom-0 w-full">
      <div class="h-24 mx-8 mb-4 bg-white rounded-lg bg-opacity-75">
        <p>xxx</p>
        <p><a href="https://soles-gaufrette.com/">soles-gaufrette.com</a></p>
      </div>
    </div>
    -->
  </section>
</template>

<script>
export default {
  props: {
    site_name: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.hero-bg-img {
  background-image: url('~assets/images/main.jpg');
}
</style>
