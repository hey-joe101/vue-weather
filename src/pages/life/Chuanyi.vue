<template lang="html">
  <div class="chuanyi">
    <TopBar :title="title"/>
    <div class="card">
      <div class="content">
        <h2>较冷</h2>
        <p>建议着厚外套加毛衣等服装。年老体弱者宜着大衣、呢外套加羊毛衫。</p>
      </div>
      <div class="info">
        <p class="area">武汉</p>
        <p>天气状况 阴</p>
        <p>温度范围 32~24</p>
        <p>风力风向 北风 0级</p>
      </div>
    </div>

  </div>
</template>

<script>
import TopBar from '@/components/base/TopBar'

export default {
  data () {
    return {
      title: '穿衣指数'
    }
  },
  components: {
    TopBar
  }
}
</script>

<style lang="styl" scoped>
  .card
    position relative
    top 46px
    margin 0 10px
    padding 15px
    height 250px
    background #fff url('/static/images/life/chuanyi.png') no-repeat right bottom / 150px
    .content
      width 80%
      text-align left
      h2
        color red
    .info
      position absolute
      left 15px
      bottom 15px
      text-align left
      font-size 13px
      p:not(.area)
        color #7c7d7d

</style>
