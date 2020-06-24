<template>
  <el-menu
      default-active="2"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
  >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span>系统管理</span>
      </template>
      <router-link :to="{name: 'users'}">
        <el-menu-item index="1-1"><i class="el-icon-s-custom"></i>用户管理</el-menu-item>
      </router-link>
      <router-link :to="{name: 'roles'}">
        <el-menu-item index="1-2"><i class="el-icon-magic-stick"></i>角色管理</el-menu-item>
      </router-link>
      <router-link :to="{name: 'permissions'}">
        <el-menu-item index="1-3"><i class="el-icon-view"></i>权限管理</el-menu-item>
      </router-link>
    </el-submenu>
    <router-link :to="{name: 'posts'}">
      <el-menu-item index="2">
        <i class="el-icon-edit"></i>
        <span slot="title">文章管理</span>
      </el-menu-item>
    </router-link>
    <router-link :to="{name: 'topics'}">
      <el-menu-item index="3">
        <i class="el-icon-paperclip"></i>
        <span slot="title">专题管理</span>
      </el-menu-item>
    </router-link>
    <router-link :to="{name: 'notices'}">
      <el-menu-item index="4">
        <i class="el-icon-close-notification"></i>
        <span slot="title">通知管理</span>
      </el-menu-item>
    </router-link>
  </el-menu>
</template>

<script>
  export default {
    name: 'Sidebar',
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
