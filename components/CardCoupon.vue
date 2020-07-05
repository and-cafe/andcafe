<template>
  <div class="m-4">
    <div class="w-full max-w-sm sm:flex-row sm:max-w-full sm:flex">
      <div class="flex-none h-48 overflow-hidden text-center bg-cover rounded-t sm:h-auto sm:w-48 sm:rounded-t-none sm:rounded-l" style="background-image: url('https://tailwindcss.com/img/card-left.jpg')" title="Woman holding a mug">
      </div>
      <div class="flex flex-col justify-between p-4 leading-normal bg-white border-b border-l border-r border-gray-400 rounded-b sm:border-l-0 sm:border-t sm:border-gray-400 sm:rounded-b-none sm:rounded-r">
        <div class="mb-8">
          <p class="flex items-center text-sm text-gray-600" v-if="annotation">
            {{ annotation }}
          </p>
          <div class="mb-2 text-xl font-bold text-gray-900">{{ title }}</div>
          <p class="text-xs font-bold text-left text-gray-700" style="white-space:pre-wrap; word-wrap:break-word">※ご利用条件</p>
          <p class="text-xs text-left text-gray-700" style="white-space:pre-wrap; word-wrap:break-word">{{ note }}</p>
        </div>
        <div class="flex items-center">
          <!--
          <img class="w-10 h-10 mr-4 rounded-full" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink">
            -->
          <div class="text-sm">
            <!--
            <p class="leading-none text-gray-900">Jonathan Reinink</p>
            -->
            <p class="flex text-gray-600">
              <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 11H9V13H7zM7 15H9V17H7zM11 11H13V13H11zM11 15H13V17H11zM15 11H17V13H15zM15 15H17V17H15z"/><path d="M5,22h14c1.103,0,2-0.897,2-2V8V6c0-1.103-0.897-2-2-2h-2V2h-2v2H9V2H7v2H5C3.897,4,3,4.897,3,6v2v12 C3,21.103,3.897,22,5,22z M19,8l0.001,12H5V8H19z"/></svg>
              </span>
              <span class="ml-2">
                {{ period }}
              </span>
              </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    annotation: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    note: {
      type: String,
      required: true,
    },
    period: {
      type: String,
      required: true,
    },
  }
}
</script>
