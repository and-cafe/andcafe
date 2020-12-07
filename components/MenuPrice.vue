<template>
  <section class="m-4 md:m-8 col-span-1">
    <h3 class="inline-block px-6 py-2 mb-4 font-bold" v-bind:class="color">{{ title }}</h3>

    <template v-for="(item, index) in menuData">
      <div class="flex m-1" :key="index">
        <span class="text-xs font-bold text-red-500" v-if="item.new">NEW</span>
        <span class="font-bold">
          {{ item.name }}
          <template v-if="item.items">
            <div class="mt-2 ml-4 text-sm">
              下記のドリンクからお選びください。
              <ul v-for="(itm, idx) in item.items" :key="idx" class="ml-4">
                <li class="list-disc">{{ itm }}</li>
              </ul>
            </div>
          </template>
        </span>
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
