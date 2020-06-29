<template>
  <el-card>
    <div slot="header">
      <span>用户角色列表</span>
    </div>
    <el-table
      :data="adminRoles"
      style="width: 100%"
    >
      <el-table-column
        type="index"
        width="50"
      />
      <el-table-column
        prop="name"
        label="用户角色名"
      />
      <el-table-column
        prop="description"
        label="描述"
      />
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small">
            管理角色权限
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
  import { getAdminRoles } from '../../service/getData';

  export default {
    name: 'Role',
    data() {
      return {
        adminRoles: []
      }
    },
    methods: {
      async getAdminRoles() {
        this.adminRoles = (await getAdminRoles()).data
      },
    },
    mounted() {
      this.getAdminRoles()
    }
  };
</script>

<style lang="less" scoped>
  @import "../../styles/layout-content";
</style>
