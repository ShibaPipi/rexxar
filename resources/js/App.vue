<template>
  <keep-alive>
    <el-container>
      <el-container>
        <el-aside :style="{width: '230px', textAlign: 'left'}">
          <el-header :style="headerStyle">Rexxar 后台</el-header>
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
    </el-container>
  </keep-alive>
</template>

<script>
  import Sidebar from './components/Sidebar'
  import Nav from './components/Nav'
  import LayoutContent from './components/Content'
  import Footer from './components/Footer'

  export default {
    name: 'App',
    components: {
      Sidebar,
      Nav,
      LayoutContent,
      Footer
    },
    data() {
      return {
        headerStyle: {height: '50px'}
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #000;
    color: #fff;
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