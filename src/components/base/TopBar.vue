<template lang="">
<div class="top-bar">
  <i class="el-icon-arrow-left" @click="$router.go(-1)"></i>
  <span class="title">{{ title }}</span>
</div>
</template>

<script>
export default {
  props: ['title'],
  data () {
    return {
    }
  },
  methods: {
  }

}
</script>

<style lang="stylus" scoped>
  .top-bar
    // position fixed
    background-color #fff
    width 100%
    height 36px
    line-height 36px
    text-align left
    i
      font-size 15px
      margin-left 10px
    .title
      margin-left 10px
</style>
