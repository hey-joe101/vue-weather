<template lang="html">
  <div class="chuanyi">
    <TopBar :title="title"/>
    <div class="card">
      1
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

<style lang="styl">
  .card
    width 100%
    height 250px
    background-image url('/static/images/life/clother.png')
    background-size 50%
    background-position right bottom
    background-repeat no-repeat
</style>
