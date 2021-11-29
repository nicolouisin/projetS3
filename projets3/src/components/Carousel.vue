<template>
  <div>
    <VueSlickCarousel class="container" v-bind="settings" ref="carousel">
      <div class="slider">11</div>
      <div class="slider">A</div>
      <div class="slider">A</div>
      <div class="slider">A</div>
      <div class="slider">A</div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import param from "@/param/param";


export default {
  name: "Carousel",
  components: { VueSlickCarousel },
  data() {
    return {
      video:[],
      settings: {
        "arrows": true,
      "dots": true,
      "infinite": false,
      "speed": 500,
      "slidesToShow": 4,
      "slidesToScroll": 4,
      "initialSlide": 0,
      "responsive": [
        {
          "breakpoint": 1024,
          "settings": {
            "slidesToShow": 3,
            "slidesToScroll": 3,
            "dots": true,
            "arrows": true,
          }
        },
        {
          "breakpoint": 600,
          "settings": {
            "slidesToShow": 2,
            "slidesToScroll": 2,
            "initialSlide": 2,
            "dots": false,
            "arrows": false
          }
        },
        {
          "breakpoint": 480,
          "settings": {
            "slidesToShow": 1,
            "slidesToScroll": 1,
            "dots": false,
            "arrows": false
          }
        }
      ]
    },
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

.container .slider {
  margin-left: -40px;
}

.container .slider:first-child {
  margin-left: -40px;
}

.container {
  margin-left: auto;
  margin-right: auto;
}



.slider img {
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;
}

.slider h3, p {
  margin-left: auto;
  margin-right: auto;
}

</style>
