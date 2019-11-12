<template>
  <div class="bg">
    <transition name="el-zoom-in-top">
      <div v-show="showQRcode" class="qr-code" ref="qrCodeDiv"></div>
    </transition>

    <transition name="el-zoom-in-bottom">
      <el-row v-show="showLogin" type="flex" justify="center" class="login-container">
        <el-col :span="4" class="login-item" @click.native="wechatClick">
          <el-avatar class="logo-icon" :size="60" :src="require('../assets/head/wechat.png')"></el-avatar>
          <div class="logo-text">微信</div>
        </el-col>
        <el-col :span="2">
        </el-col>
        <el-col :span="4" class="login-item" @click.native="userClick">
          <el-avatar class="logo-icon" :size="60" :src="require('../assets/head/user.png')"></el-avatar>
          <div class="logo-text">游客</div>
        </el-col>
      </el-row>
    </transition>
  </div>
</template>

<style scoped lang="less">
  .bg {
    color: white;
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-size: 20px;
    background: url("../assets/bg.gif");
  }

  .bg:after {
    position: absolute;
    content: " ";
    top: 0;
    left: -200%;
    width: 60%;
    height: 100%;
    animation: flash 4s ease-in-out 10s infinite;
    transform: skewX(-45deg);
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, .05) 50%, rgba(255, 255, 255, 0) 100%);
  }

  @keyframes flash {
    0% {
      left: -200%;
    }
    100% {
      left: 200%;
    }
  }

  .login-container {
    /*width: 120px;*/
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }

  .login-item {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .logo-icon {
    padding: 10px 10px;
  }

  .logo-text {
    padding-top: 10px;
    font-size: 14px;
  }

  .qr-code {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 200px;
    height: 200px;
    /*border: 1px solid rgba(255,255,255,1);*/
    box-shadow: 0 0 20px 10px rgba(255, 255, 255, .2);
  }
</style>

<script>
/* eslint-disable no-new */

import QRCode from 'qrcodejs2'

export default {
  name: 'launch',
  components: {},
  data () {
    return {
      showLogin: true,
      showQRcode: false
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.updateQRcode()
    },
    updateQRcode () {
      if (!this.showQRcode) return
      this.$nextTick(() => {
        let url = 'https://open.weixin.qq.com/connect/oauth2/authorize?' +
            'appid=wx2538987e05854cee&' +
            'redirect_uri=' + encodeURIComponent('https://zenggen.xyz/api/author/action') +
            '&response_type=code&scope=snsapi_userinfo&state=STATE'
        new QRCode(this.$refs.qrCodeDiv, {
          text: url,
          width: 200,
          height: 200,
          colorDark: '#333333', // 二维码颜色
          colorLight: '#ffffff', // 二维码背景色
          correctLevel: QRCode.CorrectLevel.L// 容错率，L/M/H
        })
      })
    },
    wechatClick () {
      this.showLogin = false
      this.showQRcode = true
      this.updateQRcode()
    },
    userClick () {
      this.$message('Function in developing...')
    }
  }
}
</script>
