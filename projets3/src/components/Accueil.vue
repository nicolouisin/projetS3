<template>
  <main>
    <div class="home_image">
      <img :src="require('../assets/images/image_accueil.png')"/>
    </div>

    <h2>En direct
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
        <g id="Ellipse_2" data-name="Ellipse 2" fill="#85f2de" stroke="#000" stroke-width="1.5">
          <circle cx="7" cy="7" r="7" stroke="none"/>
          <circle cx="7" cy="7" r="6.25" fill="none"/>
        </g>
      </svg>
    </h2>
    <div class="container slider">
      <div class="mini-container">
        <div class="img">
          <img src="images/miniatures/miniature_emission_1.png" alt="">
        </div>
        <div class="descri">
          <h3>Fête de la science 2020 - Le Live!</h3>
          <p>C'est dans le bar où elle chante
            que Maggie Conlan fait la ...</p>
        </div>
      </div>
    </div>

    <Carousel></Carousel>


    <h2>Emission
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
        <g id="Ellipse_2" data-name="Ellipse 2" fill="#85f2de" stroke="#000" stroke-width="1.5">
          <circle cx="7" cy="7" r="7" stroke="none"/>
          <circle cx="7" cy="7" r="6.25" fill="none"/>
        </g>
      </svg>
    </h2>
    <div class="container slider">
      <div class="mini-container">
        <div class="img">
          <img src="images/miniatures/miniature_emission_1.png" alt="">
        </div>
        <div class="descri">
          <h3>Fête de la science 2020 - Le Live!</h3>
          <p>C'est dans le bar où elle chante
            que Maggie Conlan fait la ...</p>
        </div>
      </div>
    </div>

    <h2>Reportage
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
        <g id="Ellipse_2" data-name="Ellipse 2" fill="#85f2de" stroke="#000" stroke-width="1.5">
          <circle cx="7" cy="7" r="7" stroke="none"/>
          <circle cx="7" cy="7" r="6.25" fill="none"/>
        </g>
      </svg>
    </h2>
    <div class="container slider">
      <div class="mini-container">
        <div class="img">
          <img src="images/miniatures/miniature_reportage_1.png" alt="">
        </div>
        <div class="descri">
          <h3>Fête de la science 2020 - Le Live!</h3>
          <p>C'est dans le bar où elle chante
            que Maggie Conlan fait la ...</p>
        </div>
      </div>
    </div>

    <h2>JPO
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
        <g id="Ellipse_2" data-name="Ellipse 2" fill="#85f2de" stroke="#000" stroke-width="1.5">
          <circle cx="7" cy="7" r="7" stroke="none"/>
          <circle cx="7" cy="7" r="6.25" fill="none"/>
        </g>
      </svg>
    </h2>
    <div class="container slider">
      <div class="mini-container">
        <div class="img">
          <img src="images/miniatures/miniature_jpo_1.png" alt="">
        </div>
        <div class="descri">
          <h3>Fête de la science 2020 - Le Live!</h3>
          <p>C'est dans le bar où elle chante
            que Maggie Conlan fait la ...</p>
        </div>
      </div>
    </div>

    <div :style="{ backgroundImage: 'url(' + require('@/assets/images/image_accueil_parallax.png') + ')' }" class="parallax">
      <div class="text_parallax">
        <h3>Qui sommes nous ?</h3>
        <p>
          La Web TV va émettre de 9 h à 17 h. Quelques émissions sont préenregistrées et seront retransmises.
          D’autres seront en direct et en duplex, pour évoquer « les formations, l’alternance et la formation
          continue, le lien entre formations et recherche scientifique, la vie étudiante, mais aussi la mixité́
          des filières, l’insertion professionnelle et autres sujets d’actualité́ ».
          <br><br>
          Vont se succéder au micro des enseignants-chercheurs, des étudiants, des représentants d’association, de
          la bibliothèque universitaire, du Crous. Et les visiteurs pourront suivre l’émission sur le site. Ce
          projet s’inscrit dans une volonté d’amélioration de la visibilité des formations, des débouchés
          professionnels et pour évoquer l’environnement des études de l’IUT.
        </p>
      </div>
    </div>
    <div class="videos">
      <h2>Thématiques
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
          <g id="Ellipse_2" data-name="Ellipse 2" fill="#85f2de" stroke="#000" stroke-width="1.5">
            <circle cx="7" cy="7" r="7" stroke="none"/>
            <circle cx="7" cy="7" r="6.25" fill="none"/>
          </g>
        </svg>
      </h2>
    </div>

  </main>


</template>

<script>
import Carousel from "./Carousel";

export default {
  name: "accueil",
  components: { Carousel },

}
</script>

<style scoped>

</style>
