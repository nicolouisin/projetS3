<template>
  <div class="carousel">
    <div class="inner">
      <img :src="require('../assets/images/miniature_emission_1.png')"
           class="image" v-for="image in images" :key="image">
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data () {
    return {
      images: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  }
}
</script>

<style scoped>
.carousel {
  width: 80%;
  overflow: hidden;
}
.inner {
  white-space: nowrap;
}
.image {
  max-width: 100%;
  margin-right: 10px;
  display: inline-flex;
  /* optional */
  background-color: #39b1bd;
  color: white;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
}
/* optional */
button {
  margin-right: 5px;
  margin-top: 10px;
}
</style>
