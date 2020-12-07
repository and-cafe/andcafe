<template>
  <section id="menus" class="py-2 lg:py-8">
    <h2 class="px-2 text-3xl font-bold text-gray-900 md:text-5xl lg:px-8">MENU</h2>

    <section-menus-swiper />

    <section class="px-2 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        <menu-price title="HOT SANDWICH" color="bg-orange-500" v-bind:menuData="menus.hotsandwich" id="hotsandwich" />
        <menu-price-item-list title="HOT TAPIOCA" color="bg-orange-500" v-bind:menuData="menus.hottapioca" id="hottapioca" />
        <menu-price-item-list title="HOT DRINK" color="bg-orange-500" v-bind:menuData="menus.hotdrink" id="hotdrink" />

        <menu-price title="SPECIAL" color="bg-yellow-500" v-bind:menuData="menus.special" id="special" />
        <menu-price-item-list title="TAPIOCA" color="bg-yellow-500" v-bind:menuData="menus.tapioca" id="tapioca" />
        <menu-price-item-list title="FRAPPE" color="bg-yellow-500" v-bind:menuData="menus.frappe" id="frappe" />
        <menu-price-item-list title="SHAKE" color="bg-yellow-500" v-bind:menuData="menus.shake" id="shake" />
        <menu-price-item-list title="TOPPING" color="bg-yellow-500" v-bind:menuData="menus.topping" id="topping" />
      </div>
    </section>

  </section>
</template>

<script>
export default {
  props: {
    menus: {
      type: Object,
      required: true,
    },
  },
}
</script>
