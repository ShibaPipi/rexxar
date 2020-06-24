<template>
  <el-container>
    <el-main :style="{margin: '12% auto'}">
      <el-col :span="10" :offset="7">
        <el-row :style="{textAlign: 'center'}">
          <h1>Laravel 7 管理后台</h1>
        </el-row>
        <el-row :style="{background: '#fff'}">
          <el-card shadow="always">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"
                     :style="{paddingTop: '40px', paddingRight: '40px'}">
              <el-form-item label="用户名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" size="small" @click="submitForm('ruleForm')">登录</el-button>
              </el-form-item>
            </el-form>
          </el-card>
        </el-row>
      </el-col>
    </el-main>
  </el-container>
</template>

<script>
  import axios from 'axios'
  import { mapGetters, mapMutations } from 'vuex'
  import { BASE_URL_PREFIX } from '../../utils/constants'

  export default {
    name: 'Login',
    data() {
      return {
        ruleForm: {
          name: '',
          password: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
        }
      };
    },
    computed: {
      ...mapGetters(['isLoggedIn'])
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.login(this.ruleForm)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      login({ name, password }) {
        axios.post(BASE_URL_PREFIX + 'login?XDEBUG_SESSION_START=18130', {
          name, password
        }).then(this.handleLogin)
      },
      handleLogin(res) {
        if ('success' === res.data.status) {
          this.setToken(res.data.data.token);
          this.redirectToHomePage()
        }
      },
      checkLogin() {
        this.isLoggedIn && this.redirectToHomePage()
      },
      redirectToHomePage() {
        this.$router.push({ name: 'home' })
      },
      ...mapMutations(['setToken'])
    },
    beforeMount() {
      this.checkLogin()
    },
    activated() {
      this.checkLogin()
    }
  }
</script>

<style lang="less">
  body {
    background: #d2d6de;
  }
</style>
