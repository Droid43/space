<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-smoothing: antialiased;
    /*text-align: center;*/
    color: #2c3e50;
    width: 100%;
    height: 100%;
    font-family:'PingFang SC','Microsoft YaHei','SimSun','Arial', sans-serif
  }
  html {
    overflow: hidden;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    border: none;
  }

  body {
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    margin: 0;
    height: 100%;
    width: 100%;
  }
</style>
