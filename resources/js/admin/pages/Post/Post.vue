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
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleDetail(scope.row)"
          >
            详情
          </el-button>
          <template v-if="1 === scope.row.status">
            <el-button
              size="mini"
              type="danger"
              @click="handleToggleStatus(scope.row)"
            >封禁
            </el-button>
          </template>
          <template v-else-if="0 === scope.row.status">
            <el-button
              size="mini"
              type="success"
              @click="handleToggleStatus(scope.row)"
            >解封
            </el-button>
          </template>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
  import { getPosts, togglePostStatus } from '../../service/getData';

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
      async handleToggleStatus(row) {
        await togglePostStatus(row.id, !row.status + 0);
        await this.posts()
      },
      handleDetail() {
        this.$alert('暂未开放该功能', '通知', {
          confirmButtonText: '确定'
        });
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
