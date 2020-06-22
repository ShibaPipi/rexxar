<template>
  <keep-alive>
    <el-container>
      <el-header>
        <Nav />
      </el-header>
      <el-container class="layout-container">
        <el-aside>
          <Sidebar />
        </el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>
            <Footer />
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
    <!--    <el-container>-->
    <!--      <Sidebar />-->
    <!--      <a-layout>-->
    <!--        <Nav />-->
    <!--        <layout-content />-->
    <!--        <Footer />-->
    <!--      </a-layout>-->
    <!--    </el-container>-->
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
    line-height: 60px;
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
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .layout-container {
    height: 100%;
  }
</style>