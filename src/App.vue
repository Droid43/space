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
  }
  body{
    margin: 0;
  }
  html,body,#app{
    width: 100%;
    height: 100%;
  }
</style>
