<!-- 分类头部组件                                                                                                      -->
<template>
<div class='category-header'>
    <header>
        <a href="javascript:;" class="iconfont icon-jiantou3" onclick="window.history.back() "></a>
        <form>
            <input type="seach" placeholder="请输入关键字" @click="toSeach" />
            <i class="iconfont icon-sousuo2"></i>
        </form>
    </header>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    toSeach(){
      console.log(this.$router);
        this.$router.replace("/search")
    }
},

}
</script>
<style lang="less">
.category-header {
    width: 100%;
    height: 4.4rem;
    position: fixed;
    z-index:10;
    top: 0;
    left: 0;
    background-color: #fff;
    border-bottom:1px solid #ccc;
    header {
    display: flex;
    form {
      width: 80%;
      position: relative;
      input {
        height: 3rem;
        border: 1px solid #efefef;
        width: 100%;
        border-radius: 1.5rem;
        margin-top: 0.7rem;
        text-indent: 10px;
      }
      i {
        position: absolute;
        right: 0;
        top:0;
        width: 4.4rem;
        height: 4.4rem;
        line-height: 4.4rem;
        text-align: center;
        color: #ccc;
      }
    }
    a {
      display: block;
      width: 15%;
      height: 4.4rem;
      line-height: 4.4rem;
      text-align: center;
    }
  }
}
</style>