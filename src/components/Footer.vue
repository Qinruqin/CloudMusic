<template>
  <div class="footer">
    <img src="" alt="" class="f-fl">
      <div class="info f-fl">
        <p class="name">绿色</p>
        <p class="singer">歌手名</p>
      </div>
      <div class="operate f-fr">
        <i class="icon iconfont">&#xe736;</i>
        <i class="icon iconfont">&#xe643;</i>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  }
}
</script>

<style scoped type="text/css">
  .footer{ position: fixed; bottom: 0; left: 0; padding: 0; width: 100%; height: 4rem;background-color: #fff; z-index: 999; }
  .footer img{ width: 2.5rem; height: 2.5rem; margin-top: .7rem; margin-right: .5rem; border-radius: 50%; }
  .footer .info{ height: 2.6rem;  margin-top:.7rem; line-height:1.3rem; font-size: .8rem; }
  .footer .info .name{ font-size: 1rem; }
  .footer .info .singer{ font-size: .8rem; }
  .footer .operate i{ display: inline-block; width: 2rem; font-size: 1.4rem;  line-height: 4rem; text-align: center; }
</style>
