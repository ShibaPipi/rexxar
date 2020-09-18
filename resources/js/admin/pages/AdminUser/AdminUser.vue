<template>
  <el-card>
    <div slot="header">
      <span>用户列表</span>
    </div>
    <el-button type="primary" size="mini" @click="dialogFormVisible = true">新用户</el-button>
    <el-dialog title="新增用户" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="用户名" prop="name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" :label-width="formLabelWidth">
          <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('form')">确 定</el-button>
      </div>
    </el-dialog>
    <el-table
      :data="adminUsers"
      style="width: 100%"
    >
      <el-table-column
        type="index"
        width="50"
      />
      <el-table-column
        prop="name"
        label="用户名"
      />
      <el-table-column
        prop="last_login_at"
        label="上次登录时间"
        width="120"
      />
      <el-table-column
        prop="created_at"
        label="创建时间"
        width="180"
      />
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <router-link :to="{name: 'admin_users.admin_roles', params: {id: scope.row.id}}">
            <el-button
              type="text"
              size="small">
              管理员用户角色
            </el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
  import { getAdminUsers, storeAdminUser } from '../../service/getData';

  export default {
    name: 'AdminUser',
    data() {
      return {
        adminUsers: [],
        dialogFormVisible: false,
        form: {
          name: '',
          password: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        },
        formLabelWidth: '120px'
      }
    },
    methods: {
      async getAdminUsers() {
        this.adminUsers = (await getAdminUsers()).data;
      },
      async handleStoreUser() {
        await storeAdminUser(this.form);
        await this.getAdminUsers();
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.handleStoreUser();
            this.dialogFormVisible = false;
            this.form.name = '';
            this.form.password = '';
          } else {
            console.log('提交失败！！');
            return false;
          }
        });
      }
    },
    mounted() {
      this.getAdminUsers()
    }
  };
</script>

<style lang="less" scoped>
  @import "../../styles/layout-content";
</style>
