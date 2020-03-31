<template>
  <div>
    <router-view></router-view>
    <TabBar>
      <!--      驼峰标识activeColor 改变写法：active-color-->
      <TabBarItem path="/home" activeColor="blue">
        <img slot="item-icon" src="../assets/img/tabbar/home.svg">
        <img slot="item-icon-active" src="../assets/img/tabbar/home_active.svg">
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem path="/category">
        <img slot="item-icon" src="../assets/img/tabbar/category.svg">
        <img slot="item-icon-active" src="../assets/img/tabbar/category_active.svg">
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem path="/cart">
        <img slot="item-icon" src="../assets/img/tabbar/cart.svg">
        <img slot="item-icon-active" src="../assets/img/tabbar/cart_active.svg">
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile">
        <img slot="item-icon" src="../assets/img/tabbar/profile.svg">
        <img slot="item-icon-active" src="../assets/img/tabbar/profile_active.svg">
        <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
  import TabBar from "./tabbar/TabBar";
  import TabBarItem from "./tabbar/TabBarItem";
  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
