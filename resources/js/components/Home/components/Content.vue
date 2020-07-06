<template>
  <el-container class="layout-content">
    <keep-alive>
      <router-view />
    </keep-alive>
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