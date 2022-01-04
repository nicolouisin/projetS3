<template>
  <div id="app">
    <header>
      <div class="container_header">
        <div class="logo">
          <router-link to="/">
            <img :src="require('./assets/images/logo_webtv_iut.png')"/>
          </router-link>
        </div>
        <nav class="nav">
          <ul>
            <li><strong>Thématiques</strong>
              <ul>
                <li><router-link to="/thematique">Making of</router-link></li>
                <li><router-link to="/thematique">Évènements</router-link></li>
                <li><router-link to="/thematique">Formations</router-link></li>
                <li><router-link to="/thematique">Étudiants</router-link></li>
                <li><router-link to="/thematique">Licence Pro</router-link></li>
                <li><router-link to="/thematique">Associations</router-link></li>
                <li><a href="">Bibliothèque Universitaire</a></li>
              </ul>
            </li>
            <li><strong><router-link to="/categories">Catégories</router-link></strong></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </nav>
        <div class="searchbar">
          <i class="fa fa-search"></i>
          <input v-model="search" @click="navigateToRoute('/recherche')" type="text" placeholder="Rechercher...">
        </div>
      </div>

      <div @click="menuOpen" class="m-nav-toggle" >
        <span :class="['m-toggle-icon', {'m-toggle-icon-open': !this.menu}]"></span>
      </div>
      <transition name="slide-fade">
        <div id="mobile-menu" v-if="!menu">
          <ul>
            <li>
              <router-link to="/categories">
                Catégories
              </router-link>
            </li>
            <li>
              <router-link to="/categories">
                Thématiques
              </router-link>
            </li>
            <li>
              <router-link to="/contact">
                Contact
              </router-link>
            </li>
          </ul>
        </div>
      </transition>
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
            <li><a href="https://www.instagram.com/mont_bel_iut/"><img :src="require('@/assets/images/instagram.png')" alt="">Instagram</a></li>
            <li><a href="https://m.facebook.com/mont.bel.iut/?tsid=0.5661123143387228&source=result"><img :src="require('@/assets/images/facebook.png')" alt="">Facebook</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Search from "@/components/Search";

export default {
  name: 'App',
  components: { Search },
  props: {
    search: String,
  },

  data () {
    return {
      menu : true,
    }
  },
  methods: {
    navigateToRoute(Search) {
      this.$router.push({ path: Search });
    },
    menuOpen: function() {
      this.menu = !this.menu
      this.$emit('toggle', this.menu)
    }
  },

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

#mobile-menu {
  background-color: #151a2a;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 1;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(1000px);
  opacity: 0;
}

#mobile-menu ul li a {
  font-size: 20px;
  line-height: 120px;
  font-family: 'Days One', sans-serif;
  color: #FFFFFF;
}

</style>
