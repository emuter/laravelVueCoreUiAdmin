<template>
  <div class="basic-layout d-flex align-items-center justify-content-center">
    <child />
  </div>
</template>

<script>
export default {
  name: 'BasicLayout'
}
</script>

<style lang="scss">
.basic-layout {
  min-height: 100vh;
}
</style>
