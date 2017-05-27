<template>
	<div class="bookover">
		<v-header title='发现'></v-header>
		<swiper :options="swiperOption">
	        <swiper-slide v-for="slide in swiperSlides" :key="slide.id">
	        	<div class="itemslider">
	        		<div class="img"><img v-bind:src="slide.images.small"/></div>
			        <div class="info">
			            <div class="title">{{slide.title}}</div>
			            <div>年份：{{slide.year}}</div>
			            <div>类型：{{slide.subtype}}</div>
			        </div>
	        	</div>
	        </swiper-slide>
      	</swiper>
	</div>
</template>

<script>
	import { swiper, swiperSlide, swiperPlugins } from 'vue-awesome-swiper';
	import vheader from '../components/header.vue'
	export default{
		name:"discover",
		data () {
			return {
				swiperOption: {
			        // 如果你后续需要找到当前实例化后的swiper对象以对其进行一些操作的话，可以自定义配置一个名字
			        // 所有配置均为可选（同Swiper配置）
			        spaceBetween: 30,
			    },
			    swiperSlides: [],
			}
		},
		mounted:function(){
		    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10',{},{
		        headers:{},
		        emulateJSON: true
		    }).then(function(response){
		        // 这里是处理正确的回调
		        console.log(response);
		        this.swiperSlides = response.data.subjects;
		        // this.swiperSlides = response.data["subjects"] 也可以
		    },function(response){
		        // 这里是处理错误的回调
		        console.log(response);
		    });
		},
		components:{
			swiper,
			swiperSlide,
			"v-header":vheader
		}

	}
</script>
<style scoped lang="scss">
.bookover{
	position: absolute;
	top:0;
	bottom:51px;
	left:0;
	right: 0;
	padding:50px 0 20px;
	background-color: #eee;
	.swiper-container {
	    width: 100%;
	    height: 100%;
	    padding:0 30px;
	    box-sizing: border-box;
	    .swiper-slide{
	    	background-color: #fff;
	    	.itemslider{
	    		width:50%;
	    		height:100%;
	    		padding:30px 20px;
	    		margin:0 auto;
	    	}
	    	.img{
	    		padding:0 10px;
				img{
					width:100%;
				}
	    	}
	    	.info{
	    		text-align: center;
	    	}
	    }
	}
}
  
</style>