<template>
  <a-layout id="components-layout-demo-responsive">
    <Sidebar />
    <a-layout>
      <Nav />
      <layout-content />
      <Footer />
    </a-layout>
  </a-layout>
</template>

<script>
  import Sidebar from './components/Sidebar'
  import Nav from './components/Nav'
  import LayoutContent from './components/Content'
  import Footer from './components/Footer'

  export default {
    name: 'Home',
    components: {
      Sidebar,
      Nav,
      LayoutContent,
      Footer
    }
  }
</script>

<style scoped>

</style>