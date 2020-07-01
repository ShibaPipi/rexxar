<template>
  <el-card>
    <div slot="header">
      通知列表
    </div>
    <el-button type="primary" size="mini" @click="dialogFormVisible = true">新增通知</el-button>
    <el-dialog title="新增通知" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="标题" prop="title" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="content" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.content" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('form')">确 定</el-button>
      </div>
    </el-dialog>
    <el-table
      :data="noticeList"
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
        prop="id"
        fixed="right"
        label="操作"
        width="120"
      >
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, noticeList)"
            type="text"
            size="small"
          >
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
  import { deleteNotice, getNotices, storeNotice } from '../../service/getData';

  export default {
    name: 'Notice',
    data() {
      return {
        noticeList: [],
        dialogFormVisible: false,
        form: {
          title: '',
          content: '',
        },
        rules: {
          title: [
            { required: true, message: '请输入标题', trigger: 'blur' }
          ],
          content: [
            { required: true, message: '请输入内容', trigger: 'blur' }
          ]
        },
        formLabelWidth: '120px'
      }
    },
    methods: {
      async notices() {
        this.noticeList = (await getNotices()).data
      },
      async handleDeleteNotice(id) {
        await deleteNotice(id);
        await this.notices();
      },
      deleteRow(index, rows) {
        this.$alert('暂未开放该功能', '通知', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.handleStoreNotice();
            this.dialogFormVisible = false;
          } else {
            console.log('提交失败！！');
            return false;
          }
        });
      },
    },
    mounted() {
      this.notices()
    }
  }
</script>

<style lang="less" scoped>
  @import "../../styles/layout-content";
</style>