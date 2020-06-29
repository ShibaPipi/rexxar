<template>
  <el-card>
    <div slot="header">
      <span>专题列表</span>
    </div>
    <el-button type="primary" size="mini">新专题</el-button>
    <el-table
      :data="topicList"
      style="width: 100%"
    >
      <el-table-column
        type="index"
        width="50"
      />
      <el-table-column
        prop="name"
        label="专题名称"
      />
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, topics)"
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
  import { getTopics } from '../../service/getData';

  export default {
    name: 'Topic',
    data() {
      return {
        topicList: []
      }
    },
    methods: {
      async topics() {
        this.topicList = (await getTopics()).data
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    mounted() {
      this.topics()
    }
  }
</script>

<style lang="less" scoped>
  @import "../../styles/layout-content";
</style>