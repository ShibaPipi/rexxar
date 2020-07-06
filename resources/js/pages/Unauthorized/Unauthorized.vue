<template>
  <el-card>
    <div>对不起，您没有权限！</div>
    <router-link :to="{ name: 'home' }">
      <el-button>返回首页</el-button>
    </router-link>
  </el-card>
</template>

<script>
  export default {
    name: 'Unauthorized'
  }
</script>

<style lang="less" scoped>
  @import "../../styles/layout-content";
</style>
