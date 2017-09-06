<template lang="">
<div class="top-bar clear">
  <!-- <router-link to="/setting"><i class="left el-icon-setting"></i></router-link> -->
  <span class="title">{{ title }}</span>
  <el-dropdown class="right" :el-dropdown-link="false">
    <span class="el-dropdown-link"><i class="el-icon-more"></i></span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item><router-link to="/share">分享</router-link></el-dropdown-item>
      <el-dropdown-item divided><router-link to="/manageCity">城市管理</router-link></el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['title']
}
</script>

<style lang="stylus" scoped>
  .top-bar
    position fixed
    background-color co
    width 100%
    height 36px
    line-height 36px
    z-index: 1000
  .left
    margin 10px 0 0 10px
  .right
    margin-right 10px
</style>
