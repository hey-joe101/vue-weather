<template lang="html">
  <div class="settings">
    <TopBar :title="title" />
    <div class="content">
      <div class="item clear" @click="$router.push('/earlyWarn')">
        <label class="left">预警管理</label>
        <i class="el-icon-arrow-right right"></i>
      </div>
      <div class="item clear">
        <label class="left">本地资讯</label>
        <el-switch v-model="news" class="right" @change="toggleSetNews"></el-switch>
      </div>
      <div class="item clear">
        <label class="left">精选内容推送</label>
        <el-switch v-model="chosedContent" class="right" @change="toggleSetChosedContent"></el-switch>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/base/TopBar'

export default {
  data () {
    return {
      title: '设置',
      news: false,
      chosedContent: false
    }
  },
  mounted () {
    this.news = this.$store.state.settings.news
    this.chosedContent = this.$store.state.settings.chosedContent
  },
  methods: {
    toggleSetNews () {
      this.$store.commit('TOGGLE_SETTINGS_NEWS')
    },
    toggleSetChosedContent () {
      this.$store.commit('TOGGLE_SETTINGS_CHOSEDCONTENT')
    }
  },
  components: {
    TopBar
  }
}
</script>

<style lang="styl" scoped>
  .content
    background-color #fff
    margin 5px
    padding 5px 15px
    .item
      height 44px
      line-height 44px
      border-bottom 1px solid #eee
      .right
        margin-top 12px
    .item:last-of-type
      border none

</style>
