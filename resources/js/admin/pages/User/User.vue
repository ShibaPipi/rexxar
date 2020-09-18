<template>
  <el-card>
    <div slot="header">
      <span>前台用户列表</span>
    </div>
    <el-table
      :data="users"
      style="width: 100%"
    >
      <el-table-column
        type="index"
        width="50"
      />
      <el-table-column
        prop="name"
        label="用户名"
      />
      <el-table-column
        prop="email"
        label="邮箱"
      />
      <el-table-column
        prop="created_at"
        label="创建时间"
        width="180"
      />
      <el-table-column
        prop="last_login_at"
        label="上次登录时间"
        width="120"
      />
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
  import { getUsers } from '../../service/getData';

  export default {
    name: 'User',
    data() {
      return {
        users: [],
      }
    },
    methods: {
      async getUsers() {
        this.users = (await getUsers()).data;
      },
    },
    mounted() {
      this.getUsers()
    }
  };
</script>

<style lang="less" scoped>
  @import "../../styles/layout-content";
</style>
