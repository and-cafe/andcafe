<template>
  <section id="coupons" class="p-2 lg:p-8">
    <h2 class="text-3xl font-bold text-gray-900 md:text-5xl">COUPONS</h2>

    <div class="p-4">
      <template v-if="isCoupons">
        <p class="font-bold">ご利用方法</p>
        <p class="pl-4 text-sm">ご注文時にクーポン画面をご提示ください。</p>
      </template>
      <template v-else>
        <p class="font-bold">現在提供中のクーポンはありません。</p>
      </template>
    </div>

    <div
      v-if="isCoupons"
      class="flex flex-col justify-center lg:flex-row lg:flex-wrap lg:justify-start"
    >
      <!--
      <card-coupon
        annotation="【移転オープン記念】"
        title="100円キャッシュバック"
        note="・Instagramのand cafeアカウント(@and.018)のフォローと、指定したハッシュタグ付きの投稿が確認できた場合にご利用いただけます。
・ドリンクをご注文いただいた際にご利用いただけます。
・他のクーポンとの併用はできません。
・期間中は何度でもご利用いただけます。"
        period="オープン日から2020年7月末まで"
        hashtag="#andcafe移転オープン"
      />
      <card-coupon
        annotation="【移転オープン記念】"
        title="トッピング1つ無料クーポン"
        note="・ドリンクをご注文いただいた際にご利用いただけます。
・他のクーポンとの併用はできません。
・期間中は何度でもご利用いただけます。"
        period="オープン日から2020年7月末まで"
      />
      <card-coupon
        annotation="【移転オープン記念】【平日限定】"
        title="トッピング半額クーポン"
        subtitle="トッピングが半額の&yen;40でご注文いただけます"
        note="・ドリンクをご注文いただいた際にご利用いただけます。
・期間中は何度でもご利用いただけます。
・土日祝はご利用いただけません。"
        period="2020/8/4(火) 〜 2020/8/7(金)"
      />
      -->
    </div>
  </section>
</template>

<script>
export default {
  props: {
    isCoupons: {
      type: Boolean,
      required: true,
    },
  },
}
</script>
