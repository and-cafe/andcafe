<template>
  <span>
    {{ name.substring(0, 1) }}<span class="text-xs sm:text-lg md:text-2xl">{{ name.substring(1, name.length) }}</span>
  </span>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  }
}
</script>
