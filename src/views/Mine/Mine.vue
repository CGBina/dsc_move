<!--  -->
<template>
  <div class="mine">
    <div v-if="!userInfo.user_id">
      <SelectLogin />
    </div>
     <h2>{{userInfo.user_name}}</h2>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import Footer from "@/components/Footer.vue"; //@ 默认执行vue项目的src目录  ../../components/Footer.vue
import SelectLogin from "@/views/Login/SelectLogin.vue"

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
    SelectLogin
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    console.log(this.$store.state.userInfo);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style>
</style>