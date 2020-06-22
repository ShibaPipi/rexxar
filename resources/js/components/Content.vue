<template>
  <el-container class="layout-content">
    <router-view />
  </el-container>
</template>

<script>
  export default {
    name: 'Content'
  }
</script>

<style lang="less" scoped>
  .layout-content {
    min-height: 800px;
  }
</style>