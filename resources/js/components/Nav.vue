<template>
  <el-dropdown class="user-menu">
      <span class="el-dropdown-link">
        <i class="el-icon-user"></i>Admin<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item icon="el-icon-circle-check">登出</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
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

<style lang="less" scoped>
  .el-header {
    background-color: #000;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #fff;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }

  .user-menu {
    float: right;
    margin-right: 15px;

    .el-icon-user {
      margin-right: 10px;
    }
  }
</style>