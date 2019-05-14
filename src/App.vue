<template>
  <div id="app">
    <cloud-header></cloud-header>
    <router-view name='main'></router-view>
    <router-view name='footer'></router-view>
  </div>
</template>

<script>
  import cloudHeader from './components/CloudHeader';
export default {
  name: 'App',
  components:{
    cloudHeader
  }
}
</script>

<style>
*{margin: 0;padding: 0;}
</style>
