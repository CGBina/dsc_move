<!--  -->
<template>
<div class='home-index'>
    <div class="swipe-wrap">
        <Swipe />
    </div>
    <QuickNav />
    <SwipeNews />
    <MiaoSha />
    <SwipeList :swipeListDatas="swipeListDatas"/>
    <div class="content-img">
      <img src="https://x.dscmall.cn/storage/data/gallery_album/original_img/CPvH5WHHbF0EoG9XjRQbbT3knMVCeEt9DlYGQhJM.png?imageView2/2/format/webp" alt="">
    </div>
    <div class="new-goods">
      <div class="goods-container">
        <div class="goods-header">
          <div class="header-top">
            <img src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978468241.png?imageView2/2/format/webp" alt="">
            <div>距离结束还剩:</div>
              <MiaoSha />
          </div>
          <div class="header-bottom">
            <div v-for="list in goodsDatas" :key="list.id">
              <strong>{{list.time}}</strong>
              <p>{{list.desc}}</p>
            </div>
          </div>
        </div>
        <SwipeList :swipeListDatas="swipeListDatas"/>
        <div class="look"><a href="javascript:;">查看更多秒杀物品</a>
        <i class="iconfont icon-jiantou1"></i></div>
      </div>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Swipe from "@/components/Swipe.vue"
import QuickNav from "../components/QuickNav.vue"
import SwipeNews from "../components/SwipeNews"
import SwipeList from "../components/SwipeList.vue"
import MiaoSha from "../components/MiaoSha.vue"
export default {
//import引入的组件需要注入到对象中才能使用
components: {
     Swipe,
     QuickNav,
     SwipeNews,
     SwipeList,
     MiaoSha,
},
data() {
//这里存放数据
return {
    goodsDatas:[{
      di:1,
      time:"24:00",
      desc:"抢购中"
    },{
      di:2,
      time:"8:00",
      desc:"即将开始"
    },{
      di:3,
      time:"10:00",
      desc:"即将开始"
    },{
      di:4,
      time:"16:00",
      desc:"即将开始"
    }],
    swipeListDatas:[{
      id:1,
      imgsrc:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
      title:"电饭锅1"
    },
    {
      id:2,
      imgsrc:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
      title:"电饭锅2"
    },
    {
      id:3,
      imgsrc:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
      title:"电饭锅3"
    },
    {
      id:4,
      imgsrc:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
      title:"电饭锅4"
    },
    {
      id:5,
      imgsrc:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
      title:"电饭锅5"
    },
    {
      id:6,
      imgsrc:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
      title:"电饭锅6"
    },
    {
      id:7,
      imgsrc:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
      title:"电饭锅7"
    },
    {
      id:8,
      imgsrc:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
      title:"电饭锅8"
    },
    {
      id:9,
      imgsrc:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
      title:"电饭锅9"
    },
    {
      id:10,
      imgsrc:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
      title:"电饭锅10"
    }]
};
},
//监听属性 类似于data概念

}
</script>
<style lang="less">
.home-index{
  background: rgb(244,244,244);
  .swipe-wrap {
  margin: 0px 20px;
  div {
    border-radius: 10px !important;
  }
}
.content-img{
  width: 100%;
  img{
    width: 100%;
  }
}
.new-goods{
  width: 100%;
  height: 35rem;
  .goods-container{
    margin: 1rem auto;
    width: 33.5rem;
    height: 33rem;
   background-color: #fff;
   border-radius: 1rem;
   .goods-header{
    
     flex-wrap:nowrap;
     height: 11.4rem;
     .header-top{
        display: flex;
       height: 2.2rem;
       padding: 2.2rem 1rem 1.2rem 1.5rem;
       img{
         width: 10rem;  
         float: left;
       }
       div{
         margin-left: 1.5rem;
        line-height: 2.2rem;
        float: left;
        height: 2.2rem;
        font-size: 1.2rem;
       }
     }
     .header-bottom{
       display: flex;
       height: 4.8rem;
       padding: 0.5rem 0;
       div{
         width: 8.9rem;
         height: 4.8rem;
         text-align: center;
         strong{
           color: #f20d28;
           font-size: 2.2rem;
           font-weight: 60rem;
         }
         p{
           color: #999;
         }
       }
     }
   }
  }
  .look{
    text-align: center;
    a{
      font-size: 1.6rem;
    }
  }
}
}
</style>