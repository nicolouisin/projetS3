<template>
  <div class="categories">
    <h1>Catégories <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
      <g id="Ellipse_2" data-name="Ellipse 2" fill="#85f2de" stroke="#000" stroke-width="1.5">
        <circle cx="7" cy="7" r="7" stroke="none"/>
        <circle cx="7" cy="7" r="6.25" fill="none"/>
      </g>
    </svg>
    </h1>
    <div class="category">
      <div class="row">
        <div id="column" v-for="categorie_video in listeCategorie" :key="categorie_video.id">
          <router-link :to="'categorie/' + categorie_video.id">
            <figure>
              <img :src="categorie_video.acf.image_categorie" alt="">
              <figcaption>{{ categorie_video.acf.libelle_categorie }}</figcaption>
            </figure>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import param from "@/param/param";

export default {
  name: "Categories",
  data() {
    return {
      listeCategorie:[],
    }
  },
  created() {
    axios.get(param.host+"categorie_video")
      .then(response=>{
        console.log("Reponse", response);

        this.listeCategorie = response.data;
      })
      .catch(error => console.log(error))
  },
}
</script>

<style scoped>

.categories {
  margin-top: 200px;
  margin-bottom: 200px;
}

.categories h1 {
  font-family: 'Days One', sans-serif;
  margin-bottom: 80px;
  color: #000000;
}

.row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

@media screen and (max-width: 1200px){

  #column {
    margin-left: 0;
    margin-right: 0;
  }
}

a {
  color: #000000;
}

figure {
  position: relative;
  margin: auto;
  margin-bottom: 80px;
}

img {
  max-height: 100vh;
  max-width: 60%;
}

figcaption {
  position: absolute;
  left: 50%;
  background-color: #FFFFFF;
  transform: translate(-50%, -50%);
  padding: 10px 10px;
  box-shadow: 1px 2px 15px 1px gray;
  border-radius: 3px;
  width: 50%;
  font-family: 'Days One', sans-serif;
}

</style>
