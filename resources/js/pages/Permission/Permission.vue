<template>
  <el-card>
    <div slot="header">
      <span>权限列表</span>
    </div>
    <el-button type="primary" size="mini" @click="dialogFormVisible = true">新增权限</el-button>
    <el-dialog title="新增权限" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="权限名" prop="name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="description" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.description" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('form')">确 定</el-button>
      </div>
    </el-dialog>
    <el-table
      :data="adminPermissionList"
      style="width: 100%"
    >
      <el-table-column
        type="index"
        width="50"
      />
      <el-table-column
        prop="name"
        label="管理员权限名"
      />
      <el-table-column
        prop="description"
        label="描述"
      />
    </el-table>
  </el-card>
</template>

<script>
  import { getAdminPermissions, storeAdminPermission } from '../../service/getData';

  export default {
    name: 'Permission',
    data() {
      return {
        adminPermissionList: [],
        dialogFormVisible: false,
        form: {
          name: '',
          description: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入权限名', trigger: 'blur' }
          ],
          description: [
            { required: true, message: '请输入描述', trigger: 'blur' }
          ]
        },
        formLabelWidth: '120px'
      }
    },
    methods: {
      async adminPermissions() {
        this.adminPermissionList = (await getAdminPermissions()).data
      },
      async handleStoreAdminPermission() {
        await storeAdminPermission(this.form);
        await this.$router.go(0)
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.handleStoreAdminPermission();
            this.dialogFormVisible = false;
            this.form.name = '';
            this.form.description = '';
          } else {
            console.log('提交失败！！');
            return false;
          }
        });
      }
    },
    mounted() {
      this.adminPermissions()
    }
  }
</script>

<style lang="less" scoped>
  @import "../../styles/layout-content";
</style>
