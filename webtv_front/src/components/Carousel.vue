<template>
  <carousel class="carousel-container" v-bind="settings" >
    <slide v-for="video in listeVideo" :key="video.id">
      <div class="slider">
        <router-link :to="'video/' + video.id">
          <img :src="video.miniature" alt="">
          <h3>{{video.titre}}</h3>
          <p>{{ video.description | liveSubstr(50) }}</p>
        </router-link>
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
        "per-page-custom": [[1199, 4], [900, 4], [600, 3], [320, 2]],
        "navigation-enabled": true,
        "mouse-drag":true,
        "per-page":4,
        "pagination-enabled":false
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
  filters: {
    liveSubstr: function (string, nb) {
      return string.substring(0,nb) + '...';
    },
  }
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

.slider h3, p {
  margin-left: auto;
  margin-right: auto;
  max-width: 200px;
  text-align: left;
}

.slider {
  margin-bottom: -50px;
}

</style>
