<template>
  <a-layout-content class="layout-content">
    <router-view />
  </a-layout-content>
</template>

<script>
  export default {
    name: 'Content'
  }
</script>

<style scoped>
  .layout-content {
    margin: 24px 16px 0;
    padding: 24px;
    background: #fff;
    min-height: 360px;
  }
</style>