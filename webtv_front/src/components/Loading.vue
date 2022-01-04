<template>
  <div>
    <vue-element-loading :active="isActive" :is-full-screen="true"/>
  </div>
</template>

<script>
import VueElementLoading from "vue-element-loading";

export default {
  name: "Loading",
  components: {
    VueElementLoading
  }
}
</script>

<style scoped>

</style>
