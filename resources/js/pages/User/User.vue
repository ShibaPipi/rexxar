<template>
  <el-card>
    <div slot="header">
      <span>用户列表</span>
    </div>
    <el-button type="primary" size="mini">新用户</el-button>
    <el-table
      :data="adminUsers"
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
        prop="created_at"
        label="创建时间"
        width="180"
      />
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small">
            管理角色
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
  import { getAdminUsers } from '../../service/getData';

  export default {
    name: 'User',
    data() {
      return {
        adminUsers: []
      }
    },
    methods: {
      async getAdminUsers() {
        this.adminUsers = (await getAdminUsers()).data;
      },
    },
    mounted() {
      this.getAdminUsers()
    }
  };
</script>

<style lang="less" scoped>
  @import "../../styles/layout-content";
</style>
