<template>
  <section class="m-4 md:m-8 col-span-1">
    <h3 class="inline-block px-6 py-2 mb-4 font-bold" v-bind:class="color">{{ title }}</h3>

    <template v-for="(item, index) in menuData.name">
      <div class="flex m-1" v-bind:key="index">
        <span class="font-bold">{{ item }}</span>
        <div class="ml-auto font-bold" v-if="index == menuData.name.length - 1">
          <div class="text-center">&yen;{{ menuData.price | addComma }}</div>
          <div class="text-sm">{{ comment }}</div>
        </div>
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
      type: Object,
      required: true,
    },
    comment: {
      type: String,
      required: false,
    },
  },
  filters: {
    addComma: function (number) {
      return number.toLocaleString();
    }
  },
}
</script>
