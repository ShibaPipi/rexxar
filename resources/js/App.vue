<template>
  <keep-alive>
    <a-layout id="components-layout-demo-responsive" class="layout-container">
      <Sidebar />
      <a-layout>
        <Nav />
        <layout-content />
        <Footer />
      </a-layout>
    </a-layout>
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
    }
  }
</script>

<style scoped>
  .layout-container {
    height: 100%;
  }
</style>