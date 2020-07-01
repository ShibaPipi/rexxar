<template>
  <div>
    <el-menu
      router
      :default-active="$route.name"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      v-for="menu in sidebarList"
      :key="menu.index"
    >
      <template v-if="0 !== menu.children.length">
        <el-submenu :index="menu.index">
          <template slot="title">
            <i :class="menu.icon"></i>
            <span>{{ menu.name }}</span>
          </template>
          <el-menu-item
            v-for="submenu in menu.children"
            :key="submenu.index"
            :index="submenu.index"
            :disabled="submenu.disabled"
          >
            <i :class="submenu.icon"></i>{{ submenu.name }}
          </el-menu-item>
        </el-submenu>
      </template>
      <template v-else>
        <el-menu-item :index="menu.index" :disabled="menu.disabled">
          <i :class="menu.icon"></i>
          <span slot="title">{{ menu.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
  import { getSideBarList } from '../../../service/getData';

  export default {
    name: 'Sidebar',
    data() {
      return {
        lastToken:'',
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
    },
    activated() {
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
