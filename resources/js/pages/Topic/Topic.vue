<template>
  <el-card>
    <div slot="header">
      <span>专题列表</span>
    </div>
    <el-button type="primary" size="mini">新专题</el-button>
    <el-table
      :data="topics"
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
  import axios from 'axios'
  import { mapState } from 'vuex'
  import { BASE_URL_PREFIX } from '../../utils/constants'

  export default {
    name: 'Topic',
    data() {
      return {
        topics: []
      }
    },
    computed: {
      ...mapState(['token'])
    },
    methods: {
      getTopics() {
        axios.get(BASE_URL_PREFIX + 'topics', {
          headers: { Authorization: this.token }
        }).then((res) => {
          if ('success' === res.data.status) {
            this.topics = res.data.data.data
          }
        })
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    mounted() {
      this.getTopics()
    },
    activated() {
      [] === this.topics && this.getTopics()
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/styles/layout-content";
</style>