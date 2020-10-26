<!--  -->
<template>
  <div class="search">
    <div class="category-header">
      <header>
        <a href="javascricpt:;" class="iconfont icon icon-jiantou3" onclick="window.history.back()"></a>
        <form>
          <input type="search" placeholder="输入关键字">
          <i class="iconfont icon-sousuo2"></i>
        </form>
      </header>
    </div>
    <div class="search-wrap">
      <div class="search-wrap-title">
        <div class="search-title">最近搜索</div>
        <div class="iconfont icon-shanchu"></div>
      </div>
      <ul class="search-list">
        <li>手机</li>
        <li>手机</li>
        <li>手机</li>
        <li>手机</li>
        <li>手机</li>
        <li>手机</li>
      </ul>
    </div>
    <div class="search-wrap" style="margin-top:1rem">
      <div class="search-wrap-title">
        <div class="search-title">热搜</div>
      </div>
      <ul class="search-list">
        <li>手机</li>
        <li>手机</li>
        <li>手机</li>
        <li>手机</li>
        <li>手机</li>
        <li>手机</li>
      </ul>
    </div>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import Footer from "@/components/Footer.vue"; //@ 默认执行vue项目的src目录  ../../components/Footer.vue

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //方法集合
  methods: {},
};
</script>
<style lang="less">
.category-header{
  width:100%;
  height: 4.4rem;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  background-color: #fff;
  border-bottom:1px solid #ccc;
  header{
    display: flex;
  }
}
.search-wrap{
  margin-top: 6rem;
  .search-wrap-title{
    display: flex;
    height: 4.4rem;
    line-height: 4.4rem;
    justify-content: space-between;
    margin: 0 10px;
    .search-title{
      font-size: 1.4rem;
    }
  }
}
.search-list{
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  li{
    width: 20%;
    height: 3rem;
    background: #efefef;
    box-sizing: border-box;
    text-align: center;
    line-height: 3rem;
    margin: 1% 2.5%;
  }
}
</style>