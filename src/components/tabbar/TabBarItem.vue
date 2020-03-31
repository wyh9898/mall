<template>
  <div class="tabbar-item" @click="itemClick()">
<!--    将slot包装在div当中，防止slot被替换之后，属性失效-->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
<!--    添加动态样式-->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path: String,
      activeColor: {
        type: String,
        default: 'deepPink'
      }
    },
    data(){
      return{

      }
    },
    //动态设置isActive属性
    computed: {
      isActive(){
        //如果当前活跃的页面的path==本tabbarItem的path，那么该item就处于活跃状态
        return this.$route.path.indexOf(this.path)!=-1;
      },
    //  动态绑定样式
      activeStyle(){
        return this.isActive? {color: this.activeColor}: {};
      }
    },
    methods:{
      itemClick(){
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  .tabbar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tabbar-item img{
    margin-top: 3px;
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

</style>
