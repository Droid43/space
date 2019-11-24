<template>
  <div class="launch">
    <div class="launch-wrapper">
      <img class="cover" :src="dailyInfo && dailyInfo.imageUrl"/>
      <p class="text-detail">{{dailyInfo.desc}}</p>
    </div>
  </div>
</template>

<style scoped lang="less">
  .launch{
    min-height: 100%;
    overflow: auto;
    text-align: center;
    &-wrapper{
      display: inline-block;
      max-width: 720px;
      min-height: 100%;
      background: ghostwhite;
      border-radius: 10px;
      .cover{
        width: 100%;
      }
      .text-detail{
        background: white;
        margin: 20px 0;
        font-size: 18px;
        text-align: right;
        background: ghostwhite;
      }
    }
    @media (min-width: 720px){
      &-wrapper{
        margin-top: 60px;
      }
    }
  }
</style>

<script>
/* eslint-disable no-new */

import QRCode from 'qrcodejs2'

let isQrcodeCreated = false
export default {
  name: 'launch',
  components: {},
  data () {
    return {
      dailyInfo: {
        imageUrl: ''
      }
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.loadDailyInfo()
    },
    async loadDailyInfo () {
      this.dailyInfo = await this.$api.util.getDailyInfo()
      this.$nextTick(() => {
        setTimeout(() => {
          // this.$router.replace('about')
        }, 2000)
      })
    }
  }
}
</script>
