<template>
  <div class="category_container">
    <div class="bg_image_title">
      <div :style="{ backgroundImage: 'url(' + require('@/assets/images/categorie_JPO.png') + ')' }"
           class="bg_img">
        <h1>JPO</h1>
      </div>
    </div>
    <div class="videos_category">
      <div class="last_videos">
        <h2>Nos dernières vidéos</h2>
        <Carousel></Carousel>
      </div>
      <div class="themes">
        <h2>Thématiques</h2>
        <Caroutheme></Caroutheme>
      </div>
    </div>
  </div>
</template>
<script>
import Video from "./Video";
import param from "@/param/param";
import Carousel from "./Carousel";
import Caroutheme from "./Caroutheme";
export default {
  name: "Categorie",
  components: { Video, Carousel, Caroutheme },
  data () {
    return {
      categorie:[],
    }
  },
  created() {
    axios.get(param.host+"categorie_video/" + this.$route.params.id)
      .then(response=>{
        console.log("Reponse", response);

        this.categorie = response.data;
      })
      .catch(error => console.log(error))
  },
}

</script>

<style scoped>

.category_container {
  margin-top: 120px;
}

.bg_image_title {
  position: relative;
  margin: auto;
  margin-bottom: 150px;
}

.bg_img {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
}

.bg_image_title h1 {
  position: absolute;
  top: 250px;
  left: 50%;
  background-color: #FFFFFF;
  transform: translate(-50%, -50%);
  padding: 20px 10px;
  box-shadow: 1px 2px 15px 1px gray;
  border-radius: 3px;
  width: 1000px;
  font-family: 'Days One', sans-serif;
  color: #000000;
}

@media screen and (max-width: 1200px) {
  .bg_image_title h1 {
    width: 800px;
  }
  .videos_category {
    max-width: 800px;
  }
}

@media screen and (max-width: 900px) {
  .bg_image_title h1 {
    width: 400px;
  }
  .videos_category {
    max-width: 400px;
  }
}

.videos_category {
  margin: 0 auto ;
  width: 1000px;
}

.videos_category h2 {
  font-family: 'Days One', sans-serif;
  text-align: left;
  margin-bottom: 40px;
  color: #000000;
}

.last_videos {
  margin-bottom: 40px;
}

.videos_category .last_videos .tab_videos .card_videos figcaption, h3 {
  max-width: 200px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Mukta', sans-serif;
}

a {
  color: #000000;
}

.videos_category .last_videos .tab_videos .card_videos {
  margin-top: 20px;
  width: 300px;
}

.videos_category .last_videos .tab_videos .card_videos img {
  max-width: 50%;

  border-radius: 5px;
}

.themes {
  margin-bottom: 50px;
}

.themes_miniature {
  display: flex;
  flex-wrap: wrap;
}

.themes div figure img {
  max-width: 60%;
}
</style>

