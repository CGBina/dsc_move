<!--  -->
<template>
<div class='swipe-news'>
    <div class="news-title">
        <img :src="imgTitle" alt="">
    </div>
    <ul :class="{'news-list':true,'trans':flag==true}" ref="news">
        <li v-for="list in newsListDatas" :key="list.id">{{list.title}}</li>
    </ul>
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
     imgTitle:require("@/assets/images/news-title.png"),
     flag:false,
     timer:"",
     newsListDatas: [
        {
          id: "1",
          title: "服务店突破两千多家",
        },
        {
          id: "2",
          title: "我们成为中国最大家电零售B2B2C系统",
        },
        {
          id: "3",
          title: "三大国际腕表品牌签约",
        },
      ],
};
},
 methods: {
    scrollnews() {
      var oUl = this.$refs.news; //获取ul节点
      oUl.style.marginTop = "-5rem";
      var that = this;
      that.flag = !that.flag;
      setTimeout(function () {
        that.newsListDatas.push(that.newsListDatas[0]); //将数组的第一个元素添加到数组末尾
        that.newsListDatas.shift();
        oUl.style.marginTop = "0";
        that.flag = !that.flag;
      }, 500);
    },
  },
mounted() {
    this.timer=setInterval(this.scrollnews,2000)
},
destroyed() {
    clearInterval(this.timer)
},

}
</script>
<style lang="less">
.swipe-news{
    display: flex;
    height: 5rem;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    margin: 0 10px;
    overflow: hidden;
    .news-title{
        img{
            height: 3.4rem;
            margin-top: 0.5rem;
        }
        
    }
    .trans{
        transition: all 0.5s;
    }
    .news-list{
        margin-left:2rem;
        li {
        font-weight: 700;
        height: 5rem;
        line-height: 5rem;
        font-size: 1.4rem;
    }
        
    }
}
</style>