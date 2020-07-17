<template>
  <el-card>
    <p>该页面不存在！</p>
    <router-link :to="{ name: 'home' }">
      <el-button>返回首页</el-button>
    </router-link>
  </el-card>
</template>

<script>
  export default {
    name: 'NotFound'
  }
</script>

<style lang="less" scoped>
  @import "../../styles/layout-content";
</style>
