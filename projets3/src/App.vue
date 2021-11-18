<template>
  <div id="app">
    <header>
      <div class="container_header">
        <div class="logo">
          <img :src="require('./assets/images/logo_webtv_white.png')"/>
        </div>
        <nav class="nav">
          <ul>
            <li><p>Thématiques</p>
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
            <li><p>Catégories</p></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div class="searchbar">
          <i class="fa fa-search"></i>
          <input type="text" placeholder="Rechercher...">
        </div>
      </div>
    </header>

    <router-view/>

    <footer>
      <h3>Copyright © 2021</h3>
      <div class="footer_column">
        <div>
          <h4>Information</h4>
          <ul>
            <li>Aide et contact</li>
            <li>Mention légales</li>
            <li>Politique de confidentialité</li>
          </ul>
        </div>
        <div>
          <h4>Partenaires</h4>
          <ul>
            <li>IUT Belfort-Montbéliard</li>
            <li>BUT MMI</li>
          </ul>
        </div>
        <div>
          <h4>Réseaux</h4>
          <ul>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>

    </footer>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
