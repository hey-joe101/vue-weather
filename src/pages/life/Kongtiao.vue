<template lang="html">
  <div class="kongtiao">
    <TopBar :title="title"/>
    <div class="card">
      <div class="content">
        <h2>少开</h2>
        <p>气象条件有利于污染物扩散。</p>
      </div>
      <div class="info">
        <p class="area">武汉</p>
        <p>湿度 64%</p>
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
      title: '空调指数'
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
    background #fff url('/static/images/life/kongtiao.jpg') no-repeat right bottom / 150px
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
