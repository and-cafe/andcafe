<template>
  <section id="info" class="scrollFadeIn">
    <div class="p-2 lg:p-8 grid grid-cols-2 sm:grid-cols-3">
      <div class="hidden rounded-lg sm:col-span-1 sm:block">
        <img data-src="/images/main01.jpg" class="rounded-lg lazyload">
      </div>

      <div class="px-2 col-span-2 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 md:text-5xl">INFORMATION</h2>
        <div class="m-4">
          <p>2020年7月26日に出水市へ移転オープンするand cafe (アンドカフェ)です。</p>
          <p>(2020年6月末まで阿久根市にて営業しておりました)</p>

          <p class="pt-4">タピオカドリンクやフラッペ・シェイクなどのドリンクスイーツを、テイクアウト販売しております。</p>
          <p>その他にハンドメイドのドライフラワーやピアス・イアリングなど販売しております。</p>

          <p class="pt-4">最新情報はInstagramでご覧いただけます。</p>
        </div>

        <dl class="flex flex-wrap mx-4 mt-4 scrollFadeIn" id="info_detail">
          <dt class="w-1/3 mb-2 font-bold md:w-1/4">営業時間</dt>
          <dd class="w-2/3 mb-2 md:w-3/4">
            <p>11:00-17:00</p>
            <p>※木曜日のみ15:00-19:00</p>
          </dd>
          <dt class="w-1/3 mb-2 font-bold md:w-1/4">店休日</dt>
          <dd class="w-2/3 mb-2 md:w-3/4">
            <div>水曜日 &amp; 第1日曜日 &amp; 第3日曜日 &amp; 不定休</div>

            <div class="text-sm">
              <client-only placeholder="(最新の店休日情報はInstagramをご確認ください)">
                <div class="hidden" id="is_not_holiday">
                  (最新の店休日情報はInstagramをご確認ください)
                </div>
                <div class="hidden font-bold text-red-500" id="is_holiday">
                  ※次回店休日は<span id="holiday_days"></span>です。
                </div>
                <section-info-script
                  v-bind:holidays="holidays"
                />
              </client-only>
            </div>
          </dd>
          <dt class="w-1/3 mb-2 font-bold md:w-1/4">Instagram</dt>
          <dd class="w-2/3 mb-2 md:w-3/4">
            <div>
              <a
                v-bind:href="'https://www.instagram.com/'+instagram_id"
                target="_blank"
                rel="noopener"
                v-on:click="gaEvent('Instagram', 'link')"
              >@{{ instagram_id }}</a>
            </div>
            <a
              v-bind:href="'https://www.instagram.com/'+instagram_id"
              target="_blank"
              rel="noopener"
              class="button--grey"
              v-on:click="gaEvent('Instagram', 'button')"
            >Instagramを開く</a>
          </dd>
        </dl>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    instagram_id: {
      type: String,
      required: true,
    },
    holidays: {
      type: Array,
      required: true,
    },
  },
  methods: {
    gaEvent(action, label) {
//      this.$ga.event({
//        eventCategory: 'info',
//        eventAction: action,
//        eventLabel: label,
//      });
    }
  },
}
</script>
