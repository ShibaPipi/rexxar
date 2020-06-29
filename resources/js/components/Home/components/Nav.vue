<template>
  <el-dropdown
    class="user-menu"
    :hide-on-click="false"
    trigger="click"
    @command="handleCommand"
  >
      <span class="el-dropdown-link">
        <i class="el-icon-user"></i>
        {{ adminInfo ? adminInfo.name : '' }}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item icon="el-icon-circle-check" command="logout">登出</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex'
  import { logout } from '../../../service/getData';

  export default {
    name: 'Nav',
    data() {
      return {}
    },
    computed: {
      ...mapState(['adminInfo'])
    },
    methods: {
      ...mapMutations(['LOGOUT']),
      ...mapActions(['GET_ADMIN_INFO']),
      handleCommand(command) {
        this[command]()
      },
      async logout() {
        await logout();
        this.LOGOUT();
        this.$router.push({ name: 'login' })
      }
    },
    mounted() {
      this.GET_ADMIN_INFO();
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
