<template>
  <a-layout-sider
      style="min-width: 256px"
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
  >
    <div class="logo"></div>
    <a-menu
        mode="inline"
        theme="dark"
        :open-keys="openKeys"
        style="width: 256px"
        @openChange="onOpenChange"
    >
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="setting" /><span>系统管理</span></span>
        <a-menu-item key="1">
          <router-link to="/users">
            用户管理
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/roles">
            角色管理
          </router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/permissions">
            权限管理
          </router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item key="5">
        <router-link to="/posts"><span><a-icon type="setting" />文章管理</span></router-link>
      </a-menu-item>
      <a-menu-item key="6">
        <router-link to="/topics"><span><a-icon type="setting" />专题管理</span></router-link>
      </a-menu-item>
      <a-menu-item key="7">
        <router-link to="/notices"><span><a-icon type="setting" />通知管理</span></router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
  export default {
    name: 'Sidebar',
    data() {
      return {
        collapsed: false,
        rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
        openKeys: ['sub1'],
      };
    },
    watch: {
      openKeys(val) {
        console.log('openKeys', val);
      },
    },
    methods: {
      onCollapse(collapsed, type) {
        console.log(collapsed, type);
      },
      onBreakpoint(broken) {
        console.log(broken);
      },
      onOpenChange(openKeys) {
        const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          this.openKeys = openKeys;
        } else {
          this.openKeys = latestOpenKey ? [latestOpenKey] : [];
        }
      },
    }
  }
</script>

<style scoped>
  #components-layout-demo-responsive .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
</style>