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
  import axios from 'axios'
  import { mapState } from 'vuex'
  import { BASE_URL_PREFIX } from '../../utils/constants'

  export default {
    name: 'Notice',
    data() {
      return {
        notices: []
      }
    },
    computed: {
      ...mapState(['token'])
    },
    methods: {
      getNotices() {
        axios.get(BASE_URL_PREFIX + 'notices', {
          headers: { Authorization: this.token }
        }).then((res) => {
          if ('success' === res.data.status) {
            this.notices = res.data.data.data
          }
        })
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    mounted() {
      this.getNotices()
    },
    activated() {
      [] === this.notices && this.getNotices()
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/styles/layout-content";
</style>