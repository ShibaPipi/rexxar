<template>
  <div>
    <el-menu
      router
      :default-active="$route.name"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      v-for="(menu, key) in sidebarList"
      :key="key"
    >
      <el-submenu v-if="menu.children" v-for="(submenu, subKey) in menu" :key="subKey" :index="menu.index">
        <template slot="title">
          <i :class="menu.icon"></i>
          <span>{{ menu.name }}</span>
        </template>
        <el-menu-item :index="[] !== submenu.index"><i :class="submenu.icon"></i>{{ submenu.name }}</el-menu-item>
        <!--      <el-menu-item index="roles"><i class="el-icon-magic-stick"></i>角色管理</el-menu-item>-->
        <!--      <el-menu-item index="permissions"><i class="el-icon-view"></i>权限管理</el-menu-item>-->
      </el-submenu>
      <el-menu-item v-else :index="menu.index">
        <i :class="menu.icon"></i>
        <span slot="title">{{ menu.name }}</span>
      </el-menu-item>
      <!--    <el-menu-item index="topics">-->
      <!--      <i class="el-icon-paperclip"></i>-->
      <!--      <span slot="title">专题管理</span>-->
      <!--    </el-menu-item>-->
      <!--    <el-menu-item index="notices">-->
      <!--      <i class="el-icon-close-notification"></i>-->
      <!--      <span slot="title">通知管理</span>-->
      <!--    </el-menu-item>-->
    </el-menu>
  </div>
</template>

<script>
  import { getSideBarList } from '../../../service/getData';

  export default {
    name: 'Sidebar',
    data() {
      return {
        sidebarList: []
      }
    },
    methods: {
      async getPermissions() {
        this.sidebarList = await getSideBarList()
      }
    },
    mounted() {
      this.getPermissions();
    }
  }
</script>

<style lang="less" scoped>
  .el-submenu {

    .el-menu-item {

      i {
        margin-right: 10px;
      }

    }

  }
</style>
