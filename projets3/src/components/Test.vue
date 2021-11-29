<template>
  <carousel class="carousel-container" v-bind="settings" >
    <slide v-for="video in video" :key="video.id">
      <div class="slider">
        <img :src="video.acf.miniature" alt="">
        <h3>{{video.acf.titre}}</h3>
        <p>Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
      </div>
    </slide>
  </carousel>
</template>

<script>

import { Carousel, Slide } from 'vue-carousel';
import param from "@/param/param";


export default {
  name: "Test",
  components: { Carousel, Slide},
  data() {
    return {
      video:[],
      settings: {
        "per-page-custom": [[1199, 4], [600, 3], [320, 2]],
        "navigation-enabled": true,
        "mouse-drag":true,
        "per-page":4,
      }
    }
  },
  created() {
    axios.get(param.host+"video")
      .then(response=>{
        console.log("Reponse", response);

        this.video = response.data;
      })
      .catch(error => console.log(error))
  }
}
</script>

<style scoped>

.carousel-container {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.slider img {
  max-width: 80%;
  border-radius: 10px;
}

.slider h3, p {
  margin-left: auto;
  margin-right: auto;
  max-width: 200px;
}

</style>
