<template>
  <el-card>
    <div slot="header">
      <span>文章列表</span>
    </div>
    <el-table
      :data="postList"
      style="width: 100%"
    >
      <el-table-column
        type="index"
        width="50"
      />
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
  import { getPosts } from '../../service/getData';

  export default {
    name: 'Post',
    data() {
      return {
        postList: []
      }
    },
    methods: {
      async posts() {
        this.postList = (await getPosts()).data
      },
    },
    mounted() {
      this.posts()
    }
  }
</script>

<style lang="less" scoped>
  @import "../../styles/layout-content";

  .el-table {

    .warning-row {
      background: oldlace;
    }

    .success-row {
      background: #f0f9eb;
    }

  }

</style>
