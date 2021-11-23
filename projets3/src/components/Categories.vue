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
        <div id="left">
          <router-link to="./Categorie">
            <figure>
              <img :src="require('../assets/images/categorie_MP.png')" alt="">
              <figcaption>Techniques de commercialisation</figcaption>
            </figure>
          </router-link>
        </div>
        <div id="right">
          <router-link to="">
            <figure>
              <img :src="require('../assets/images/categorie_MP.png')" alt="">
              <figcaption>MP</figcaption>
            </figure>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Categorie from "./Categorie";

export default {
  name: "Categories",
  components: { Categorie },
}
</script>

<style scoped>

#left, #right {
  flex: 50%;
}

#right {
  margin-left: -100px;
}

#left {
  margin-right: -100px;
}


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
  flex: 50%;
}

@media screen and (max-width: 1200px){
  .row {
    flex-direction: column;
  }

  #left, #right {
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
