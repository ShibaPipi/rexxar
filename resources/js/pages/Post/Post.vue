<template>
  <el-card>
    <div slot="header">
      <span>文章列表</span>
    </div>
    <el-table
      :data="posts"
      style="width: 100%"
    >
      <el-table-column
        prop="title"
        label="文章标题"
      />
      <el-table-column
        prop="created_at"
        label="创建时间"
        width="180"
      />
      <el-table-column
        prop="status_name"
        label="审核状态"
        width="100"
      />
    </el-table>
  </el-card>
</template>

<script>
  import axios from 'axios'
  import { mapState } from 'vuex'
  import { BASE_URL_PREFIX } from '../../utils/constants'

  export default {
    name: 'Post',
    data() {
      return {
        posts: []
      }
    },
    computed: {
      ...mapState(['token'])
    },
    methods: {
      getPosts() {
        axios.get(BASE_URL_PREFIX + 'posts', {
          headers: { Authorization: this.token }
        }).then((res) => {
          if ('success' === res.data.status) {
            this.posts = res.data.data.data
          }
        })
      },
    },
    mounted() {
      this.getPosts()
    },
    activated() {
      [] === this.post && this.getPosts()
    }
  }
</script>

<style lang="less" scoped>
  .el-card {
    width: 100%;
  }

  .el-table {

    .warning-row {
      background: oldlace;
    }

    .success-row {
      background: #f0f9eb;
    }

  }

</style>
