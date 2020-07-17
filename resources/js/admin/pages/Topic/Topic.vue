<template>
  <el-card>
    <div slot="header">
      <span>专题列表</span>
    </div>
    <el-button type="primary" size="mini" @click="dialogFormVisible = true">新专题</el-button>
    <el-dialog title="新专题" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="名称" prop="title" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('form')">确 定</el-button>
      </div>
    </el-dialog>
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
        width="120"
      >
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.row)"
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
  import { deleteTopic, getTopics, storeTopic } from '../../service/getData';

  export default {
    name: 'Topic',
    data() {
      return {
        topicList: [],
        dialogFormVisible: false,
        form: {
          name: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入标题', trigger: 'blur' }
          ]
        },
        formLabelWidth: '120px'
      }
    },
    methods: {
      async topics() {
        this.topicList = (await getTopics()).data
      },
      async handleStoreTopic() {
        await storeTopic(this.form);
        await this.topics();
      },
      async deleteRow(row) {
        await deleteTopic(row.id);
        await this.topics();
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.handleStoreTopic();
            this.dialogFormVisible = false;
            this.form.name = '';
          } else {
            console.log('提交失败！！');
            return false;
          }
        });
      },
    },
    mounted() {
      this.topics()
    }
  }
</script>

<style lang="less" scoped>
  @import "../../styles/layout-content";
</style>