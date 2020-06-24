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
            管理权限
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
  import axios from 'axios'
  import { mapState } from 'vuex'
  import { BASE_URL_PREFIX } from '../../utils/constants'

  export default {
    name: 'Role',
    data() {
      return {
        adminRoles: []
      }
    },
    computed: {
      ...mapState(['token'])
    },
    methods: {
      getAdminRoles() {
        axios.get(BASE_URL_PREFIX + 'admin_roles', {
          headers: { Authorization: this.token }
        }).then((res) => {
          if ('success' === res.data.status) {
            this.adminRoles = res.data.data.data
          }
        })
      },
    },
    mounted() {
      this.getAdminRoles()
    },
    activated() {
      [] === this.adminUsers && this.getAdminRoles()
    }
  };
</script>

<style lang="less" scoped>
  .el-card {
    width: 100%;
  }
</style>
