<template>
  <el-card>
    <div slot="header">用户角色</div>
    <el-form :model="form" :rules="rules" ref="form">
      <el-form-item label="活动性质" prop="adminUserRoles">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="form.adminUserRoleList" @change="handleCheckedChange">
          <el-checkbox
            v-for="adminUserRole in adminRoleList"
            :label="adminUserRole.id"
            :key="adminUserRole.id"
            name="adminRoleList"
          >
            {{adminUserRole.description}}
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">保存</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex'
  import { getAdminUserRoles, storeAdminUserRoles } from '../../service/getData';

  const { mapState, mapMutations } = createNamespacedHelpers('userRole');

  export default {
    name: 'UserRole',
    data() {
      const { id } = this.$route.params;

      return {
        id,
        adminRoleList: [],
        checkAll: false,
        isIndeterminate: true,
        form: {
          adminUserRoleList: []
        },
        rules: {
          adminUserRoleList: [
            { type: 'array', required: true, message: '请至少选择一个角色', trigger: 'change' }
          ]
        }
      }
    },
    computed: {
      ...mapState(['lastId'])
    },
    methods: {
      ...mapMutations(['SET_LAST_ID']),
      async adminUserRoles() {
        const data = await getAdminUserRoles(this.id);

        this.SET_LAST_ID(this.id);
        this.adminRoleList = data.roles;
        this.form.adminUserRoleList = data.userRoles;
        this.handleCheckedChange(this.form.adminUserRoleList);
      },
      async handleStoreAdminUserRoles() {
        await storeAdminUserRoles(this.id, this.form);
        this.$router.push({ name: 'home' });
      },
      handleCheckAllChange(val) {
        this.form.adminUserRoleList = val ? this.adminRoleList.map(item => item.id) : [];
        this.isIndeterminate = false;
      },
      handleCheckedChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.adminRoleList.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.adminRoleList.length;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.handleStoreAdminUserRoles()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    },
    activated() {
      this.id = this.$route.params.id;
      this.lastId !== this.id && this.adminUserRoles();
    }
  }
</script>

<style lang="less" scoped>
  @import "../../styles/layout-content";
</style>
