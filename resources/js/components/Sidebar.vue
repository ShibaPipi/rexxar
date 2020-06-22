<template>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>系统管理</span>
      </template>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
      <el-menu-item index="1-3">选项3</el-menu-item>
    </el-submenu>
  </el-menu>
<!--  <a-layout-sider-->
<!--      style="min-width: 256px"-->
<!--      breakpoint="lg"-->
<!--      collapsed-width="0"-->
<!--      @collapse="onCollapse"-->
<!--      @breakpoint="onBreakpoint"-->
<!--  >-->
<!--    <div class="logo"></div>-->
<!--    <a-menu-->
<!--        mode="inline"-->
<!--        theme="dark"-->
<!--        :open-keys="openKeys"-->
<!--        style="width: 256px"-->
<!--        @openChange="onOpenChange"-->
<!--    >-->
<!--      <a-sub-menu key="sub1">-->
<!--        <span slot="title"><a-icon type="setting" /><span>系统管理</span></span>-->
<!--        <a-menu-item key="1">-->
<!--          <router-link to="/users">-->
<!--            用户管理-->
<!--          </router-link>-->
<!--        </a-menu-item>-->
<!--        <a-menu-item key="2">-->
<!--          <router-link to="/roles">-->
<!--            角色管理-->
<!--          </router-link>-->
<!--        </a-menu-item>-->
<!--        <a-menu-item key="3">-->
<!--          <router-link to="/permissions">-->
<!--            权限管理-->
<!--          </router-link>-->
<!--        </a-menu-item>-->
<!--      </a-sub-menu>-->
<!--      <a-menu-item key="5">-->
<!--        <router-link to="/posts"><span><a-icon type="setting" />文章管理</span></router-link>-->
<!--      </a-menu-item>-->
<!--      <a-menu-item key="6">-->
<!--        <router-link to="/topics"><span><a-icon type="setting" />专题管理</span></router-link>-->
<!--      </a-menu-item>-->
<!--      <a-menu-item key="7">-->
<!--        <router-link to="/notices"><span><a-icon type="setting" />通知管理</span></router-link>-->
<!--      </a-menu-item>-->
<!--    </a-menu>-->
<!--  </a-layout-sider>-->
</template>

<script>
  export default {
    name: 'Sidebar',
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
</style>