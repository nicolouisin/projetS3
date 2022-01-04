<template>
  <div class="container">
    <h1>Recherche WebTv</h1>
    <input v-model="search"  type="text" placeholder="Rechercher...">
    <div class="slider" >
      <div class="column" v-for="video in filteredSearch">
      <router-link :to="'video/' + video.id">
        <img :src="video.miniature" alt="">
        <h3>{{ video.titre }}</h3>
      </router-link>
      </div>
    </div>
    <div class="slider">

    </div>
  </div>
</template>

<script>
import param from "@/param/param";
import App from "@/App";

export default {
  name: "Search",
  components: { App },
  props: {
    value: String,
  },

  data() {
    return {
      listeVideo: [],
      search: ''
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
  computed: {
    filteredSearch: function (){
      return this.listeVideo.filter((video) => {
        return video.titre.match(this.search);
      })
    }
  }
}
</script>

<style scoped>

h1 {
  margin-top: 200px;
  text-align: left;
  margin-left: 150px;
  font-family: 'Days One', sans-serif;
}

input {
  border: 2px solid #85F2DE;
  background-color: transparent;
  padding: 10px;
  border-radius: 20px;
}

.slider {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  padding-top: 50px;
  border-radius: 15px;
}

.column {
  flex: 50%;
  margin-bottom: 30px;

}

a {
  color: #000000;
}

.column img {
  width: 315px;
  height: 150px;
  border-radius: 5px;
}

</style>
