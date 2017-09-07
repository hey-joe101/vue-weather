<template lang="html">
  <div class="home">
    <div class="top-bar clear" v-if="bdScrollTop === 0">
      <span style="margin-left: 24px;">{{ wdata.realtime.city_name }}</span>
      <el-dropdown class="right" :el-dropdown-link="false">
        <span class="el-dropdown-link"><i class="el-icon-more" style="margin-right: 10px;"></i></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item disabled><router-link to="/share">分享</router-link></el-dropdown-item>
          <el-dropdown-item disabled><router-link to="/manageCity">城市管理</router-link></el-dropdown-item>
          <el-dropdown-item><router-link to="/settings">设置</router-link></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="top-bar2 clear" v-if="bdScrollTop !== 0">
      <span style="margin-left: 24px;">{{ wdata.realtime.city_name }}</span>
      <span>{{ wdata.realtime.weather.temperature }}</span><span class="sup">。</span>
      <el-dropdown class="right" :el-dropdown-link="false">
        <span class="el-dropdown-link"><i class="el-icon-more" style="margin-right: 10px;"></i></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item disabled><router-link to="/share">分享</router-link></el-dropdown-item>
          <el-dropdown-item disabled><router-link to="/manageCity">城市管理</router-link></el-dropdown-item>
          <el-dropdown-item><router-link to="/settings">设置</router-link></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="realtime">
      <p>{{ wdata.realtime.weather.info}}</p>
      <div class="temperature">
        <span>{{ wdata.realtime.weather.temperature }}</span><span>。</span>
      </div>
      <div class="wind-humi">
        <i class="el-icon-star-on"></i>{{ wdata.realtime.wind.direct }}{{ wdata.realtime.wind.power }}<i class="el-icon-star-on"></i>66%
      </div>
      <div class="pm25">
        <div class="btn">
          <i class="el-icon-star-on"></i>{{ wdata.pm25.pm25.curPm }} {{ airQuality }}<i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <div class="h24">
        <div class="state" style="margin-top: -4px;">
          <p>短时预报</p>
          <div><i :class="wdata.hour24.curImg"></i></div>
          <p>{{ wdata.hour24.curWea }}</p>
          <p>{{ wdata.hour24.curSug }}</p>
        </div>
        <div class="state" v-for="item in wdata.hour24.state">
          <p>{{ item.hour }}</p>
          <div><i :class="item.img"></i></div>
          <p>{{ item.wea }}</p>
          <p>{{ item.temp }}℃</p>
        </div>
      </div>
    </div>

    <div class="seven-day">
      <div class="row" v-for="item in wdata.weather">
        <div>
          周{{ item.week }} {{ dateFormat(item.date) }}
        </div>
          <div class="center">
            <i class="el-icon-circle-check"></i> {{ getSky(item) }}
        </div>
        <div style="margin-top: -4px;">
          32<sup>。</sup>~ 25<sup>。</sup>
        </div>
      </div>
    </div>

    <div class="life">
      <el-row :gutter="3">
        <router-link v-for="(item, index) in wdata.life" :key="index" :to="item.path">
          <el-col :span="6">
          <div class="bg_white block">
            <i class="el-icon-star-off"></i>
            <p>{{ item.listItem }}</p>
            <p>{{ item.sug }}</p>
          </div>
        </el-col>
      </router-link>
      </el-row>
    </div>
    <div class="bottom">
      <p>updating by JC_Dash</p>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      wdata: {},
      bdScrollTop: 0
    }
  },
  computed: {
    airQuality () {
      return this.getAirQuality(this.wdata.pm25.pm25.curPm)
    }
    // bdScrollTop () {
      // return document.body.scrollTop
    // }
  },
  created () {
    const self = this
    this.$ajax.get('/static/data/weather.json')
      .then(function (res) {
        if (res.data.error_code === 0) {
          self.wdata = res.data.result.data
        } else {
          console.log(res.data.reason)
        }
      })
      .catch(function (res) {
        console.log(res)
      })
  },
  mounted () {
    window.addEventListener('scroll', this.getScrollTop)
  },
  methods: {
    getScrollTop () {
      this.bdScrollTop = document.body.scrollTop
    },
    getAirQuality (curPm) {
      let result = ''
      let n = parseInt(curPm)
      if (n > 0 && n <= 50) {
        result = '优'
      } else if (n > 50 && n <= 100) {
        result = '良'
      } else if (n > 100 && n < 150) {
        result = '轻度'
      } else if (n > 150 && n <= 200) {
        result = '中度'
      } else if (n > 200 && n <= 300) {
        result = '重度'
      } else if (n > 300) {
        result = '严重'
      } else {
        result = null
      }
      return result
    },
    /*
      "2016-01-09" ==> 01/09
    */
    dateFormat (date) {
      let dateArr = date.split('-')
      return `${dateArr[1]}/${dateArr[2]}`
    },
    getSky (item) {
      return item.info.day[1]
    }
  },
  watch: {
  }
}
</script>

<style lang="styl" scoped>
.bottom
  background-color #eee
  padding 3px
  p
    color #7d7c7c
.seven-day
  width 100%
  margin-top 10px
  font-size 13px
  background-color #fff
  .row
    display flex
    justify-content space-between
    height 30px
    line-height 30px
    div
      width 100px
      &.center
        text-align left
        margin-left 50px

.life
  width 100%
  background-color #eee
  padding 10px 5px 0
  font-size 13px
  .bg_white
    background-color #fff
  .el-row
    margin-bottom 5px
    &:last-child
     margin-bottom 0
    .block
      margin-bottom 5px
      padding 5px
      i
        color red
        font-size 28px
        margin-bottom 7px
      p:nth-of-type(2)
        font-size 12px
        color #7d7c7c
.top-bar
.top-bar2
  position fixed
  width 100%
  height 36px
  line-height 36px
  z-index 1000
.top-bar2
  background-color #fff
  text-align left
  .sup
    position relative
    top -10px
.realtime
  padding 56px 0 0
  width 100%
  background-image url('/static/images/weather_bg.jpg')
  background-repeat no-repeat
  background-size 100%
  .temperature
    padding-left 60px
    span
      font-size 64px
      font-weight bold
      &:nth-of-type(2)
        position relative
        bottom 40px
  .wind-humi
    font-size 14px
    i:nth-of-type(2)
      margin-left 20px
  .pm25
    .btn
      margin 0 auto
      font-size 14px
      border 1px solid rgb(38, 42, 39)
      width 100px
      border-radius 12px
  .h24
    display flex
    overflow scroll
    font-size 12px
    margin 60px 5px 0
    .state
      min-width 60px
      min-height 80px
@media screen and (max-width: 320px)
  .realtime
    .h24
      margin 20px 5px 0
</style>
