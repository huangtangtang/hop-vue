<template>
    <div id="app">
        <!-- 这里对应第一级路由对应的组件 -->
      <router-view/>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App'
  }
  </script>
  
  <style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    // todo 
    width: 100%; 
    height: 100%;
    box-sizing: border-box;
  }
  *{
    padding: 0;
    margin: 0;
  }
  </style>
  