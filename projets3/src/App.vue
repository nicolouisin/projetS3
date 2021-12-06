<template>
  <div id="app">
    <header>
      <div class="container_header">
        <div class="logo">
          <router-link to="/">
            <img :src="require('./assets/images/logo_webtv_white.png')"/>
          </router-link>
        </div>
        <nav class="nav">
          <ul>
            <li><strong>Thématiques</strong>
              <ul>
                <li><a href="">Making of</a></li>
                <li><a href="">Évènements</a></li>
                <li><a href="">Formations</a></li>
                <li><a href="">Étudiants</a></li>
                <li><a href="">Licence Pro</a></li>
                <li><a href="">Associations</a></li>
                <li><a href="">Bibliothèque Universitaire</a></li>
              </ul>
            </li>
            <li><strong><router-link to="/categories">Catégories</router-link></strong></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </nav>
        <div class="searchbar">
          <i class="fa fa-search"></i>
          <input type="text" placeholder="Rechercher...">
        </div>
      </div>
      <div class="m-nav-toggle">
        <span class="m-toggle-icon"></span>
      </div>
    </header>

    <router-view/>

    <footer>
      <h3>Copyright © 2021</h3>
      <div class="footer_column">
        <div id="left_footer">
          <h4>Information</h4>
          <ul>
            <li><router-link to="/contact">Aide et contact</router-link></li>
            <li><router-link to="/mentions-legales">Mention légales</router-link></li>
            <li><router-link to="/politique-de-confidentialite">Politique de confidentialité</router-link></li>
          </ul>
        </div>
        <div id="middle_footer">
          <h4>Partenaires</h4>
          <ul>
            <li><a href="http://www.iut-bm.univ-fcomte.fr/">IUT Belfort-Montbéliard</a></li>
            <li><a href="http://mmimontbeliard.com/">BUT MMI</a></li>
          </ul>
        </div>
        <div id="right_footer">
          <h4>Réseaux</h4>
          <ul>
            <li><a href=""><img :src="require('@/assets/images/instagram.png')" alt="">Instagram</a></li>
            <li><a href=""><img :src="require('@/assets/images/twitter.png')" alt="">Twitter</a></li>
            <li><a href=""><img :src="require('@/assets/images/facebook.png')" alt="">Facebook</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Mukta', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  text-align: center;
}

</style>
