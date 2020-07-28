<template>
  <section class="m-4 md:m-8 col-span-1">
    <h3 class="inline-block px-6 py-2 mb-4 font-bold" v-bind:class="color">{{ title }}</h3>

    <template v-for="(item, index) in menuData">
      <div class="flex m-1">
        <span class="font-bold">{{ item.name }}</span>
        <span class="ml-auto font-bold">￥{{ item.price | addComma }}</span>
      </div>
    </template>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    menuData: {
      type: Array,
      required: true,
    },
  },
  filters: {
    addComma: function (number) {
      return number.toLocaleString();
    }
  },
}
</script>
