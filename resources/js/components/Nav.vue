<template>
  <a-layout-header :style="{ background: '#fff', padding: 0 }">
    <a-dropdown-button class="user-menu">
      Admin
      <a-menu slot="overlay" @click="handleMenuClick">
        <a-menu-item key="1">
          <a-icon type="user" />
          登出
        </a-menu-item>
      </a-menu>
      <a-icon slot="icon" type="setting" />
    </a-dropdown-button>
  </a-layout-header>
</template>

<script>
  export default {
    name: 'Nav',
    methods: {
      handleButtonClick(e) {
        console.log('click left button', e);
      },
      handleMenuClick(e) {
        console.log('click', e);
      },
    },
  }
</script>

<style scoped>
  .user-menu {
    float: right;
    margin-right: 15px;
  }
</style>