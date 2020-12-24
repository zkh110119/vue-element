<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="routerFlag"
    >
      <el-menu-item index="/component">组件初始化</el-menu-item>
      <el-submenu index="">
        <template slot="title">应用部署</template>
        <el-menu-item index="/deploy/db">DB检查</el-menu-item>
        <el-menu-item index="/deploy/redis">Redis检查</el-menu-item>
        <el-menu-item index="/deploy/es">ES检查</el-menu-item>
      </el-submenu>
      <el-menu-item index="/shell">shell</el-menu-item>
      <el-menu-item index="/sql">sql</el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeIndex: "1",
      routerFlag: true
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key);
    }
  }
}
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
