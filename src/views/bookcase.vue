<template>
  <div class="bookcase">
    <v-header title='书架'></v-header>
    <ul class="booklist">
      <li v-for="article in articles">
        <div class="img"><img v-bind:src="article.images.small"/></div>
        <div class="info">
          <div class="title">{{article.title}}</div>
          <div>年份：{{article.year}}</div>
          <div>类型：{{article.subtype}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import vHeader from '../components/header.vue'
export default {
  name: 'bookcase',
  data () {
    return {
      articles:[]
    }
  },
  created:function(){
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=20',{},{
      headers:{},
      emulateJSON: true
    }).then(function(response){
      // 这里是处理正确的回调
      console.log(response);
      this.articles = response.data.subjects;
      // this.articles = response.data["subjects"] 也可以
    },function(response){
      // 这里是处理错误的回调
      console.log(response);
    });
  },
  components:{
    vHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bookcase{
  padding-top: 50px;
  background-color: #fff;
  .booklist{
    display: block;
    padding:20px 20px 0;
    font-size: 0;
    text-align: center;
    overflow:hidden;
    li{
      display:inline-block;
      width: 28%;
      margin-bottom: 20px;
      &:nth-of-type(3n+1){
        float: left;
      }
      &:nth-of-type(3n+3){
        float: right;
      }
      .img{
        display:block;
        img{
          width:100%;
        }
      }
      .info{
        padding:10px 0;
        font-size: 13px;
        color:#777;
        text-align: left;
        line-height: 1.4;
        .title{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 15px;
          color: #666;
        }
      }  
    }
  }
}
  
</style>
