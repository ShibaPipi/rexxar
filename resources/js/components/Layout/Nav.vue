<template>
  <el-dropdown
      class="user-menu"
      :hide-on-click="false"
      trigger="click"
      @command="handleCommand"
  >
      <span class="el-dropdown-link">
        <i class="el-icon-user"></i>Admin<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item icon="el-icon-circle-check" command="logout">登出</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'Nav',
    methods: {
      handleCommand(command) {
        this[command]()
      },
      logout() {
        this.unsetToken();
        this.$router.push({ name: 'login' })
      },
      ...mapMutations(['unsetToken'])
    },
    mounted() {
    }
  }
</script>

<style lang="less" scoped>
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
