<template>
  <el-card>
    <div slot="header">
      <span>用户权限列表</span>
    </div>
    <el-table
      :data="adminPermissions"
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
  import axios from 'axios'
  import { mapState } from 'vuex'
  import { BASE_URL_PREFIX } from '../../utils/constants'

  export default {
    name: 'Permission',
    data() {
      return {
        adminPermissions: []
      }
    },
    computed: {
      ...mapState(['token'])
    },
    methods: {
      getAdminPermissions() {
        axios.get(BASE_URL_PREFIX + 'admin_permissions', {
          headers: { Authorization: this.token }
        }).then((res) => {
          if ('success' === res.data.status) {
            this.adminPermissions = res.data.data.data
          }
        })
      }
    },
    mounted() {
      this.getAdminPermissions()
    },
    activated() {
      [] === this.adminPermissions && this.getAdminPermissions()
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/styles/layout-content";
</style>
