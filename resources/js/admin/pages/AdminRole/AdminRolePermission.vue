<template>
  <el-card>
    <div slot="header">
      用户角色权限
    </div>
    <el-form :model="form" :rules="rules" ref="form">
      <el-form-item label="活动性质" prop="adminRolePermissions">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="form.adminRolePermissionList" @change="handleCheckedChange">
          <el-checkbox
            v-for="adminRolePermission in adminPermissionList"
            :label="adminRolePermission.id"
            :key="adminRolePermission.id"
            name="adminRolePermissionList"
          >
            {{adminRolePermission.description}}
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
  import { getAdminRolePermissions, storeAdminRolePermissions } from '../../service/getData';

  const { mapState, mapMutations } = createNamespacedHelpers('rolePermission');

  export default {
    name: 'AdminRolePermission',
    data() {
      const { id } = this.$route.params;

      return {
        id,
        adminPermissionList: [],
        checkAll: false,
        isIndeterminate: true,
        form: {
          adminRolePermissionList: []
        },
        rules: {
          adminRolePermissionList: [
            { type: 'array', required: true, message: '请至少选择一个权限', trigger: 'change' }
          ]
        }
      }
    },
    computed: {
      ...mapState(['lastId'])
    },
    methods: {
      ...mapMutations(['SET_LAST_ID']),
      async adminRolePermissions() {
        const data = await getAdminRolePermissions(this.id);

        this.SET_LAST_ID(this.id);
        this.adminPermissionList = data.permissions;
        this.form.adminRolePermissionList = data.rolePermissions;
        this.handleCheckedChange(this.form.adminRolePermissionList);
      },
      async handleStoreAdminRolePermissions() {
        await storeAdminRolePermissions(this.id, this.form);
        this.$router.push({ name: 'home' });
      },
      handleCheckAllChange(val) {
        this.form.adminRolePermissionList = val ? this.adminPermissionList.map(item => item.id) : [];
        this.isIndeterminate = false;
      },
      handleCheckedChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.adminPermissionList.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.adminPermissionList.length;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.handleStoreAdminRolePermissions()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    },
    activated() {
      this.id = this.$route.params.id;
      this.lastId !== this.id && this.adminRolePermissions();
    }
  }
</script>

<style lang="less" scoped>
  @import "../../styles/layout-content";
</style>
