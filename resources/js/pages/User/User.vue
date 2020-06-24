<template>
  <el-card>
    <div slot="header">
      <span>用户列表</span>
    </div>
    <el-table
      :data="adminUsers"
      style="width: 100%"
    >
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
  import axios from 'axios'
  import { mapState } from 'vuex'
  import { BASE_URL_PREFIX } from '../../utils/constants'

  export default {
    name: 'User',
    data() {
      return {
        adminUsers: []
      }
    },
    computed: {
      ...mapState(['token'])
    },
    methods: {
      getAdminUsers() {
        axios.get(BASE_URL_PREFIX + 'admin_users', {
          headers: { Authorization: this.token }
        }).then((res) => {
          if ('success' === res.data.status) {
            this.adminUsers = res.data.data.data
          }
        })
      },
    },
    mounted() {
      this.getAdminUsers()
    },
    activated() {
      [] === this.adminUsers && this.getAdminUsers()
    }
  };
</script>

<style lang="less" scoped>
  .el-card {
    width: 100%;
  }
</style>
