<template>
  <div class="container">
    <div :style="{ backgroundImage: 'url(' + require('@/assets/images/bg_video.svg') + ')' }"
         class="video_type">
      <h1> Titre vidéo </h1>
      <iframe width="1000" height="500" src="https://www.youtube.com/embed/rmMrGLSVIAE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <ul>
        <li>Catégorie</li>
        <li>Thématique</li>
        <li>Date</li>
        <li>Durée</li>
      </ul>
      <p>
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
      </p>
    </div>
    <div class="below_video">
      <div class="like_too">
        <h2>Vous aimerez aussi</h2>
        <Carousel></Carousel>
      </div>
      <div class="themes">
        <h2>Thématiques</h2>
        <div class="themes_miniature">
          <div>
            <router-link to="">
              <figure>
                <img :src="require('../assets/images/thematique_etudiant.png')" alt="">
                <figcaption></figcaption>
              </figure>
            </router-link>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Carousel from "./Carousel";
import param from "@/param/param";

export default {
  name: "Video",
  components: { Carousel },
  data ()  {
    return {
      video:[]
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

.video_type {
  margin-top: 100px;
  padding-top: 50px;
  margin-bottom: 50px;
  height: 1200px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.video_type h1 {
  margin-bottom: 50px;
  font-family: 'Days One', sans-serif;
  color: #FFFFFF;
}

.video_type ul {
  margin-top: 30px;
}

.video_type ul li {
  list-style-type: none;
  display: inline-block;
  color: #FFFFFF;
  padding-right: 20px;
  padding-left: 20px;
  font-family: 'Mukta', sans-serif;
}

.video_type ul li:nth-child(-n+3) {
  border-right: 1px solid white;
}

p {
  margin-top: 80px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  color: #FFFFFF;
}

.below_video {
  width: 1000px;
  margin: 0 auto ;
}

.like_too {
  margin-bottom: 80px;
}

.like_too h2 {
  margin-bottom: 60px;
  text-align: left;
}

.themes {
  margin-bottom: 50px;
}

.themes h2 {
  margin-bottom: 50px;
  text-align: left;
}

.below_video .themes_miniature {
  display: flex;
  flex-wrap: wrap;
}

.themes div figure img {
  max-width: 60%;
}

@media screen and (max-width: 1200px) {
  iframe {
    width: 800px;
    height: 400px;
  }
  .below_video {
    width: 800px;
  }
  p {
    max-width: 800px;
  }

}

@media screen and (max-width: 900px) {
  iframe {
    width: 400px;
    height: 250px;
  }
  .below_video {
    width: 400px;
  }
  p {
    max-width: 400px;
  }

}

</style>

