<template>
  <el-card>
    <div slot="header">
      <span>用户权限列表</span>
    </div>
    <el-table
      :data="adminPermissionList"
      style="width: 100%"
    >
      <el-table-column
        type="index"
        width="50"
      />
      <el-table-column
        prop="name"
        label="用户权限名"
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
            管理权限内容
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
  import { getAdminPermissions } from '../../service/getData';

  export default {
    name: 'Permission',
    data() {
      return {
        adminPermissionList: []
      }
    },
    methods: {
      async adminPermissions() {
        this.adminPermissionList = (await getAdminPermissions()).data
      }
    },
    mounted() {
      this.adminPermissions()
    }
  }
</script>

<style lang="less" scoped>
  @import "../../styles/layout-content";
</style>
