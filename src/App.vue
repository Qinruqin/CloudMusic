<template>
  <div id="app">
    
    <router-view name='main'></router-view>
    <router-view name='footer'></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
*{margin: 0;padding: 0;font-size: 14px;}
a{color: #000;text-decoration: none;}
ul,li{list-style: none;}
.f-fl{float: left;}
.f-fr{float: right;}
</style>
