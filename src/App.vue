<template>
  <div class="app">
    <div class="navbar">
      <div class="tab">
        <router-link to='/discover'>
          <i class="iconfont icon-faxian"></i>
          <span>发现</span>
        </router-link>
      </div>
      <div class="tab">
        <router-link to='/bookcase'>
          <i class="iconfont icon-shujia"></i>
          <span>书架</span>
        </router-link>
      </div>
      <div class="tab">
        <router-link to='/thought'>
          <i class="iconfont icon-interactive"></i>
          <span>想法</span>
        </router-link>
      </div>
      <div class="tab">
        <router-link to='/mine'>
          <i class="iconfont icon-people"></i>
          <span>我</span>
        </router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components:{
    
  }
}
</script>

<!--<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>-->

<style scoped lang="scss">
  @import './common/style/iconfont.css';
  .app{
    padding-bottom:50px;
    box-sizing: border-box;
    .navbar{
      position: fixed;
      align-items:center;
      bottom: 0;
      left: 0;
      right: 0;
      display: -webkit-box;
      display: box;
      display: -webkit-flex;
      display: flex;
      height: 50px;
      background-color: #fff;
      color:#333;
      border-top: 1px solid #ccc;
      .tab{
        flex:1;
        text-align: center;
        color: #666;
        i{
          display: block;
          font-size: 18px;
        }
        span{
          display: block;
          padding-top: 2px;
          font-size: 14px;
        }
      }
    }
  }
  
</style>
