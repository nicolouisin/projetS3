<template>
  <carousel class="carousel-container" v-bind="settings" >
    <slide v-for="theme_video in themeVideo" :key="theme_video.id">
      <div class="slider">
        <router-link :to="'thematique/' + theme_video.id">
        <img :src="theme_video.acf.image_theme" alt="">
        </router-link>
      </div>
    </slide>
  </carousel>
</template>

<script>

import { Carousel, Slide } from 'vue-carousel';
import param from "@/param/param";



export default {
  name: "Caroutheme",
  components: { Carousel, Slide},
  data() {
    return {
      themeVideo:[],
      settings: {
        "per-page-custom": [[1199, 4], [900, 4], [600, 3], [320, 2]],
        "navigation-enabled": true,
        "mouse-drag":true,
        "per-page":4,
      }
    }
  },
  created() {
    axios.get(param.host+"theme_video")
      .then(response=>{
        console.log("Reponse", response);

        this.themeVideo = response.data;
      })
      .catch(error => console.log(error))
  },
}
</script>

<style scoped>

a {
  color: #000000;
}

.slider:hover {
  transform: scale(0.95);
  transition: 0.25s ease-in;
}

.carousel-container {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;
}

.slider img {
  max-width: 100%;
  border-radius: 5px;
}


</style>
