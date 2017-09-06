<template lang="html">
  <div class="early-warn">
    <TopBar :title="title" />
  </div>
</template>

<script>
import TopBar from '@/components/base/TopBar'

export default {
  data () {
    return {
      title: '预警管理'
    }
  },
  components: {
    TopBar
  }
}
</script>

<style lang="styl" scoped>
</style>
