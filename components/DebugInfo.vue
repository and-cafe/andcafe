<template>
  <div class="fixed bottom-0 left-0 z-50 p-2 m-2 text-gray-900 bg-gray-300 rounded-lg bg-opacity-50">
    <div v-if="showDebug">
      <div>
        <span>width : {{ width }}px</span>
        <span>height : {{ height }}px</span>
      </div>
      <div v-if="showDevice">>
        <span v-show="$device.isMobileOrTablet">
          モバイル or タブレット
        </span>
        <span v-show="$device.isDesktop">
          デスクトップ
        </span>
      </div>
      <div v-if="enableTailwindcss">
        <span class="sm:hidden">default : 〜639px</span>
        <span class="hidden sm:inline md:hidden">sm : 640px〜767px</span>
        <span class="hidden md:inline lg:hidden">md : 768px〜1023px</span>
        <span class="hidden lg:inline xl:hidden">lg : 1024px〜1279px</span>
        <span class="hidden xl:inline">xl : 1280px〜</span>
      </div>
      <div>
        <span v-bind:class="{ hidden: isLandscape }" class="vertical-text">たてなが</span>
        <span v-bind:class="{ hidden: isPortrait }">よこなが</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    enableTailwindcss: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data: function () {
    return {
      width: 0,
      height: 0,
      //orientation: 'portrait', //縦向き
      isPortrait: true,   // 縦向き(縦長)
      isLandscape: false, // 横向き(横長)
      showDebug: false,
      showDevice: false,
    }
  },
  mounted () {
    window.addEventListener('resize', this.resizeWindow, false);
    window.addEventListener('orientationchange', this.resizeWindow, false);
    this.resizeWindow();
    this.showDebug = true
  },
  methods: {
    resizeWindow () {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      //this.orientation = (this.width > this.height ? 'landscape' : 'portrait') ;
      this.isPortrait = (this.width <= this.height);
      this.isLandscape = (this.width >= this.height);
    },
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.resizeWindow, false);
    window.removeEventListener('orientationchange', this.resizeWindow, false);
  },
}
</script>

<style scoped>
.vertical-text {
  writing-mode: vertical-rl;
  text-orientation: upright
}
</style>
