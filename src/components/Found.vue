<template>
  <div class="list-container">

  	<el-container>
  		<cloud-header></cloud-header>
  		<el-main>
		    <el-carousel>
		    	<el-carousel-item v-for="item in bannerData" :key="item.id">
		    		<img :src="item.imageUrl" alt="">
		    	</el-carousel-item>
		    </el-carousel>
		    <ul class="category">
			  <li><router-link to="/"><i class="icon iconfont">&#xe63a;</i><p>每日推荐</p></router-link></li>
			  <li><router-link to="/"><i class="icon iconfont">&#xe78a;</i><p>歌单</p></router-link></li>
			  <li><router-link to="/"><i class="icon iconfont">&#xe608;</i><p>排行榜</p></router-link></li>
			  <li><router-link to="/"><i class="icon iconfont">&#xe65e;</i><p>电台</p></router-link></li>
			  <li><router-link to="/"><i class="icon iconfont">&#xe736;</i><p>直播</p></router-link></li>
			</ul>
			<div class="box">
				<div class="b-head">
					<h5>推荐歌单</h5>
					<router-link to="/" class="f-fr">歌单广场</router-link>
				</div>
				<ul class="list">
					<li v-for="item in personalized6"><router-link to="/"><img :src="item.picUrl" alt=""><p class="ellipsis2">{{item.name}}</p></router-link></li>
				</ul>
			</div>
		</el-main>
		<el-footer class="footer" style="height:4rem;">
			<cloud-footer></cloud-footer>
		</el-footer>
	</el-container>
  </div>
</template>

<script>
	import cloudHeader from './Header';
	import cloudFooter from './Footer';
export default {
  name: 'List',
  data () {
    return {
    	bannerData:[],
    	personalizedData:[]
    }
  },
  computed:{
    personalized6(){
      return this.personalizedData.slice(0,6);
    }
  },
  methods:{
  	getBanner(){
  		this.$http({
	        url:'http://localhost:3000/banner',
	        method:'get'
	    }).then((result)=>{
	        if(result.status == 200){
	            this.bannerData = result.data.banners.splice(0,5);
	        }
	    }).catch((error)=>{
	        console.log(error);
	    });
  	},
  	//获取推荐歌单
  	getPersonalized(){
  		this.$http({
	        url:'http://localhost:3000/personalized',
	        method:'get'
	    }).then((result)=>{
	        if(result.status == 200){
	            this.personalizedData = result.data.result;
	        }
	    }).catch((error)=>{
	        console.log(error);
	    });
  	}
  },
  beforeMount(){
    this.getBanner();
    this.getPersonalized();
  },
  components:{
    cloudHeader,
    cloudFooter
  }
}
</script>

<style>
.el-main{padding: 0 3%;margin-top: 3.5rem;}
.el-carousel-item{text-align: center;}
.el-carousel img{ width: 100%;}
.el-carousel .el-carousel__container{max-height: 8rem;}
.el-carousel .el-carousel__button{width: 6px;height: 6px;border-radius: 50%;}
.category{display: flex;padding:1rem 0;border-bottom: 1px solid #eee;}
.category li{display: inline-block;width: 20%;}
.category li a i{display: block; width: 3rem;height: 3rem; margin:0 auto;color: #fff; font-size: 1.3rem; line-height: 3rem; text-align: center; background-color: #d33a31;border-radius: 50%;}
.category li a p{margin-top: 4px; font-size: .9rem; text-align: center;}
.b-head h5{display: inline-block; font-size: 1.1rem;line-height:3rem;}
.b-head a{padding:0 8px;margin-top: 1rem; font-size: .8rem; border:1px solid #eee;border-radius: 10px; }
.box .list li{float: left; display: inline-block;width: 30%;height: 8.5rem; margin-right: 3%;margin-bottom: 3%; }
.box .list li:nth-of-type(3n){margin-right: 0;}
.box .list li img{width: 100%;height: 6rem;}
.box .list li p{font-size: .8rem;}
.ellipsis2{overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient: vertical;}
</style>
