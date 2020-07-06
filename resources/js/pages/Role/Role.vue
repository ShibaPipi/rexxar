<template>
  <el-card>
    <div slot="header">
      <span>用户角色列表</span>
    </div>
    <el-button type="primary" size="mini" @click="dialogFormVisible = true">新增角色</el-button>
    <el-dialog title="新增角色" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="角色名" prop="name" :label-width="formLabelWidth">
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
      :data="adminRoleList"
      style="width: 100%"
    >
      <el-table-column
        type="index"
        width="50"
      />
      <el-table-column
        prop="name"
        label="用户角色名"
      />
      <el-table-column
        prop="description"
        label="描述"
      />
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <router-link :to="{ name: 'roles.permissions', params: {id: scope.row.id} }">
            <el-button
              type="text"
              size="small">
              管理角色权限
            </el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
  import { getAdminRoles, storeAdminRole } from '../../service/getData';

  export default {
    name: 'Role',
    data() {
      return {
        adminRoleList: [],
        dialogFormVisible: false,
        form: {
          name: '',
          description: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入角色名', trigger: 'blur' }
          ],
          description: [
            { required: true, message: '请输入描述', trigger: 'blur' }
          ]
        },
        formLabelWidth: '120px'
      }
    },
    methods: {
      async adminRoles() {
        this.adminRoleList = (await getAdminRoles()).data
      },
      async handleStoreAdminRole() {
        await storeAdminRole(this.form);
        await this.adminRoles()
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.handleStoreAdminRole();
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
      this.adminRoles()
    }
  };
</script>

<style lang="less" scoped>
  @import "../../styles/layout-content";
</style>
