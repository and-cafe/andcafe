<template>
  <section class="m-4 md:m-8 col-span-1">
    <h3 class="inline-block px-6 py-2 mb-4 font-bold" v-bind:class="color">{{ title }}</h3>

    <template v-for="(item, index) in menuData.items">
      <div class="flex m-1" :key="index">
        <span class="text-xs font-bold text-red-500" v-if="item.new">NEW</span>
        <span class="font-bold">
          {{ item.name }}
        </span>
        <span class="ml-auto font-bold">&yen;{{ item.price  }}</span>
      </div>
    </template>

    <div class="font-bold m-4 text-sm">
      味をお選びいただけます。
      <template v-for="(item, index) in menuData.potato">
        <ul class="flex m-1 list-disc ml-8" v-bind:key="index">
          <li>{{ item }}</li>
        </ul>
      </template>
    </div>

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
  },
  filters: {
    addComma: function (number) {
      return number.toLocaleString();
    }
  },
}
</script>
