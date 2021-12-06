<template>
  <carousel class="carousel-container" v-bind="settings" >
    <slide v-for="video in listeVideo" :key="video.id">
      <div class="slider">
        <img :src="video.miniature" alt="">
        <h3>{{video.titre}}</h3>
        <p>Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
      </div>
    </slide>
  </carousel>
</template>

<script>

import { Carousel, Slide } from 'vue-carousel';
import param from "@/param/param";


export default {
  name: "MyCarousel",
  components: { Carousel, Slide},
  data() {
    return {
      listeVideo:[],
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

        this.listeVideo = response.data;
      })
      .catch(error => console.log(error))
  },
  methods:{
    byCategory: function(cat){
      return this.listeVideo.filter(function (video){
        return video.categorie_video === cat;
      })

    }
  }
}
</script>

<style scoped>

.carousel-container {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;
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
