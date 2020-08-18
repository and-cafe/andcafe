<template>
  <section class="relative h-screen">
    <div class="w-full h-screen bg-center bg-cover hero-bg-img">
      <div class="absolute w-full h-screen bg-black bg-opacity-25"></div>
      <h1 class="absolute w-full text-6xl font-bold text-center text-white hero-cover xl:text-7xl" id="site_name">
        {{ site_name }}
      </h1>
    </div>
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

.hero-cover {
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  /* Tailwind CSS Only */
  max-width: initial;
}
</style>
