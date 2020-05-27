<template>
  <a-layout id="components-layout-demo-responsive">
    <Sidebar />
    <a-layout>
      <Nav />
      <Content />
      <Footer />
    </a-layout>
  </a-layout>
</template>

<script>
  import Sidebar from './components/Sidebar'
  import Nav from './components/Nav'
  import Content from './components/Content'
  import Footer from './components/Footer'

  export default {
    name: 'Home',
    components: {
      Sidebar,
      Nav,
      Content,
      Footer
    }
  }
</script>

<style scoped>

</style>