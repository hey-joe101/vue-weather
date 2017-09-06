<template lang="html">
  <div class="ziwaixian">
    <TopBar :title="title"/>
    <div class="card">
      <div class="content">
        <h2>最弱</h2>
        <p>辐射弱，涂擦SPF8-12防晒护肤品。</p>
      </div>
      <div class="info">
        <p class="area">武汉</p>
        <p>天气状况 阴</p>
        <p>温度范围 32~24</p>
        <p>日出日落 05:32/18:12</p>
      </div>
    </div>

  </div>
</template>

<script>
import TopBar from '@/components/base/TopBar'

export default {
  data () {
    return {
      title: '紫外线指数'
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
    margin 10px
    padding 15px
    height 250px
    background #fff url('/static/images/life/ziwaixian.png') no-repeat right bottom / 150px
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
