<template>
  <div class="header">
    <i class="icon iconfont f-fl">&#xe643;</i>
    <i class="icon iconfont f-fr">&#xe619;</i>
    <ul>
    	<li><router-link to="/">我的</router-link></li>
    	<li><router-link to="/" active-class="active">发现</router-link></li>
    	<li><router-link to="/">朋友</router-link></li>
      <li><router-link to="/">视频</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CloudHeader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped type="text/css">
  .header{ position: fixed; top: 0; left: 0; width: 100%; height:3rem; line-height: 48px;background-color: #fff;  z-index: 999; }
  .icon{ width: 3rem; color: #aaa; font-size: 1.2rem; text-align: center; }
  ul{ width: 80%; margin: 0 auto; text-align: center; }
  li{display: inline-block; font-size: 1rem; width: 20%; }
  li a{color: #aaa;}
  .active{color:#000;font-size: 1.2rem;}
</style>
