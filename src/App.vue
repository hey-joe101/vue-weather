<template>
<div id="app">
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="styl">
@import "./style/common.styl";

#app
  positon relative
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center

.main
  background-color yellow
  position absolute
  top 36px
.content
  overflow hidden
</style>
