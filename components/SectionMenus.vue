<template>
  <section id="menus" class="p-2 lg:p-8">
    <h2 class="text-3xl font-bold text-gray-900 md:text-5xl">MENU</h2>

    <section>
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        <menu-price title="SPECIAL" color="bg-yellow-500" v-bind:menuData="menus.special" />
        <menu-price-item-list title="TAPIOCA" color="bg-yellow-500" v-bind:menuData="menus.tapioca" />
        <menu-price-item-list title="FRAPPE" color="bg-yellow-500" v-bind:menuData="menus.frappe" />
        <menu-price-item-list title="SHAKE" color="bg-yellow-500" v-bind:menuData="menus.shake" />
        <menu-price-item-list title="TOPPING" color="bg-yellow-500" v-bind:menuData="menus.topping" />
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
