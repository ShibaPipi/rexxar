<template>
  <el-row type="flex" justify="center" align="middle">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>来吧，复制粘贴给你找重复</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="handleClearTextArea">清空你写的玩应</el-button>
      </div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="80px"
        label-position="top"
        :style="{ padding: '0 20px' }"
      >
        <el-form-item label="咱也不知道你要输什么" prop="textarea1">
          <el-input
            type="textarea"
            :autosize="{ minRows: 5 }"
            placeholder="请输入内容"
            v-model="ruleForm.textarea1">
          </el-input>
        </el-form-item>
        <div style="margin: 20px 0;"></div>
        <el-form-item label="咱也不知道你要比对什么" prop="textarea2">
          <el-input
            type="textarea"
            :autosize="{ minRows: 5 }"
            placeholder="请输入内容"
            v-model="ruleForm.textarea2">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="submitForm('ruleForm')">开始比较</el-button>
        </el-form-item>
      </el-form>
      <template v-if="0 !== resultList.length">
        <el-card>
          <div slot="header" class="clearfix">
            <span>你要找的是不是：</span>
          </div>
          <div v-for="res in resultList" :key="res" class="text item">
            <div>{{ res }}</div>
          </div>
        </el-card>
      </template>
    </el-card>
  </el-row>
</template>

<script>
  import { compare } from '../../service/getData'

  export default {
    name: 'ZYZ',
    data() {
      return {
        resultList: [],
        ruleForm: {
          textarea1: '',
          textarea2: ''
        },
        rules: {
          textarea1: [
            { required: true, message: '不输入我给你去毛线？', trigger: 'blur' }
          ],
          textarea2: [
            { required: true, message: '不输入我给你去毛线...', trigger: 'blur' }
          ],
        }
      }
    },
    methods: {
      handleClearTextArea() {
        this.ruleForm.textarea1 = '';
        this.ruleForm.textarea2 = '';
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.handleCompare()
          } else {
            return false;
          }
        });
      },
      async handleCompare() {
        this.resultList = await compare(this.ruleForm);
      }
    }
  }
</script>

<style lang="less" scoped>
  .el-row {
    min-height: 800px;

  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before, .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 800px;
    min-height: 600px;
  }
</style>
