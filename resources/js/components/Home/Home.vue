<template>
  <el-container>
    <el-aside :style="{width: '230px', textAlign: 'left'}">
      <router-link :to="{name: 'home'}">
        <el-header :style="headerStyle">Rexxar 后台</el-header>
      </router-link>
      <Sidebar />
    </el-aside>
    <el-container>
      <el-header :style="headerStyle">
        <Nav />
      </el-header>
      <el-main>
        <LayoutContent />
      </el-main>
      <el-footer :style="headerStyle">
        <Footer />
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
  import Sidebar from './components/Sidebar'
  import Nav from './components/Nav'
  import LayoutContent from './components/Content'
  import Footer from './components/Footer'

  import { mapState } from 'vuex'
  import { getCurrentAdminUserPermissions } from '../../service/getData';

  export default {
    name: 'Home',
    components: {
      Sidebar,
      Nav,
      LayoutContent,
      Footer
    },
    data() {
      return {
        headerStyle: { height: '50px' }
      };
    },
    computed: {
      ...mapState(['isLoggedIn'])
    },
    methods: {
      checkLogin() {
        !this.isLoggedIn && this.redirectToLoginPage()
      },
      redirectToLoginPage() {
        this.$router.push({ name: 'login' })
      },
    },
    beforeMount() {
      this.checkLogin();
    },
    activated() {
      this.checkLogin()
    }
  }
</script>

<style lang="less" scoped>
  .el-header {
    background-color: #000;
    color: #fff;
    text-align: center;
    line-height: 50px;
  }

  .el-footer {
    background-color: #E9EEF3;
    color: #000;
    text-align: center;
    line-height: 50px;
  }

  .el-aside {
    background-color: #909399;
    color: #fff;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
</style>
