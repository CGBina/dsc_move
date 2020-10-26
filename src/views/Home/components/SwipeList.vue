<template>
<div>
    <div class="swipe-list-wrap">
    <div class="swipe-wrap2">
      <div class="swipe-item" v-for="swipelist in swipeListDatas" :key="swipelist.id">
        <img :src="swipelist.imgsrc" alt />
        <span>{{swipelist.title}}</span>
      </div>
    </div>
  </div>
  <div class="progress">
    <div class="progress-bar" :style="styleobj"></div>
  </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  props:{
   swipeListDatas:Array,
  },
  components: {},
  data() {
    //这里存放数据
    return {
      //屏幕宽度
      screenW:document.documentElement.clientWidth || document.body.clientWidth,
      //滚动内容的宽度
      scrollContentW:1100,
      //进度条总进度的宽度
      bgBarW:100,
      //进度条的占用长度
      barW:20,
      //进度条起点
      startX:0,
      //进度条的终点
      endX:0,
      //移动的距离
      barMoveW:0
    };
  },
  methods:{
    touchstartFn(e){
      console.log(e.touches[0].pageX);
      this.startX=Number(e.touches[0].pageX);
    },
    touchmoveFn(e){
      //获取第一个触摸点
      let touch=e.touches[0];
      //求移动的距离
      let moveWidth=Number(touch.pageX)-this.startX
      console.log(moveWidth);
      //进度条移动的距离
      this.barMoveW=-((this.bgBarW/this.scrollContentW)*moveWidth-this.endX)
      if(this.barMoveW<=0){
        this.barMoveW=0
      }else if(this.barMoveW>this.bgBarW-this.barW){
        this.barMoveW=this.bgBarW-this.barW
      }
    },

    
    touchendFn(){
      this.endX=this.barMoveW;
    }
    ,
    //进度条动态设置
    getBarWidth(){
      this.barW=this.bgBarW*this.screenW/this.scrollContentW;
    }
    ,
    bindEvent(){
      this.$el.addEventListener("touchstart",this.touchstartFn,false)
      this.$el.addEventListener("touchmove",this.touchmoveFn,false)
      this.$el.addEventListener("touchend", this.touchendFn, false);
    }
  },
  computed: {
    styleobj(){
      return{
        width:`${this.barW}px`,
        left:`${this.barMoveW}px`,
      }
    }
  },
  
  mounted() {
      //console.log(this);
      this.bindEvent();
      this.getBarWidth();
  },
};
</script>
<style lang="less">
.swipe-list-wrap {
  width: 100%;
  height: 16rem;
  background-color: #ccc;
  position: relative;
  left: 0;
  top: 0;
  overflow-x: scroll;
  .swipe-wrap2 {
    width: 110rem;
    height: 16rem;
    position: absolute;
    left: 0;
    top: 0;
    .swipe-item {
      width: 11rem;
      height: 16rem;
      background-color: #fff;
      border-radius: 0;
      float: left;
      display: flex;
      flex-direction: column;
      text-align: center;
      img {
        width: 11rem;
        height: 11rem;
      }
    }
  }
}

//隐藏滚动条
.swipe-list-wrap::-webkit-scrollbar{
  display: none;
}
.progress{
  margin-top:-2rem;
  width: 10rem;
  height: 5px;
  background: #ccc;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  .progress-bar{
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 20px;
    background-color: red;
  }
}
</style>