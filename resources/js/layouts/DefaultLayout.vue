<template>
  <div class="main-layout bg-gray-400 h-100">
    <!-- <navbar /> -->

    <div class="page h-100">
      <child />
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  name: 'MainLayout',
  metaInfo () {
    return { title: 'Laravel Vue Spa' }
  },
  components: {
    Navbar
  }
}
</script>
<style scoped>
  .main-layout, .page { min-height: 100vh;}
</style>