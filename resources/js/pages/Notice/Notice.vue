<template>
  <el-card>
    <div slot="header">
      通知列表
    </div>
    <el-button type="primary" size="mini">新增通知</el-button>
    <el-table
      :data="notices"
      style="width: 100%"
    >
      <el-table-column
        type="index"
        width="50"
      />
      <el-table-column
        prop="title"
        label="通知标题"
      />
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, notices)"
            type="text"
            size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
  import { getNotices } from '../../service/getData';

  export default {
    name: 'Notice',
    data() {
      return {
        notices: []
      }
    },
    methods: {
      async getNotices() {
        this.notices = (await getNotices()).data
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    mounted() {
      this.getNotices()
    }
  }
</script>

<style lang="less" scoped>
  @import "../../styles/layout-content";
</style>