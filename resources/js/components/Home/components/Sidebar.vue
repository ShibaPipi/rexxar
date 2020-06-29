<template>
  <el-menu
    router
    :default-active="$route.name"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span>系统管理</span>
      </template>
      <el-menu-item index="users"><i class="el-icon-s-custom"></i>用户管理</el-menu-item>
      <el-menu-item index="roles"><i class="el-icon-magic-stick"></i>角色管理</el-menu-item>
      <el-menu-item index="permissions"><i class="el-icon-view"></i>权限管理</el-menu-item>
    </el-submenu>
    <el-menu-item index="posts">
      <i class="el-icon-edit"></i>
      <span slot="title">文章管理</span>
    </el-menu-item>
    <el-menu-item index="topics">
      <i class="el-icon-paperclip"></i>
      <span slot="title">专题管理</span>
    </el-menu-item>
    <el-menu-item index="notices">
      <i class="el-icon-close-notification"></i>
      <span slot="title">通知管理</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
  import { getAllAdminPermissionNames } from '../../../service/getData';

  export default {
    name: 'Sidebar',
    data() {
      return {
        permissionList: []
      }
    },
    methods: {
      async getPermissions() {
        this.permissionList = await getAllAdminPermissionNames(true)
      },
      handleSelect(index, indexPath) {
        if (!this.permissionList.indexOf(index)) {
          this.$router.push('/403')
        }
        console.log(index, indexPath)
      }
    },
    mounted() {
      this.getPermissions()
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
