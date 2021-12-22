<template>
  <div :style="{ backgroundImage: 'url(' + require('@/assets/images/background_contact.png') + ')' }"class="bg_contact">
    <div id="container">
      <h1>Contact
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
          <g id="Ellipse_2" data-name="Ellipse 2" fill="#85f2de" stroke="#000" stroke-width="1.5">
            <circle cx="7" cy="7" r="7" stroke="none"/>
            <circle cx="7" cy="7" r="6.25" fill="none"/>
          </g>
        </svg>
      </h1>
      <div class="contact_flex">
        <form action="http://localhost:8888/projetS3/wordpress/wp-json/contact-form-7/v1/contact-forms/265/feedback" method="post" id="contact_form">
          <div class="name">
            <input type="text" placeholder="Prenom" name="prenom" id="prenom" required>
          </div>
          <div class="email">
            <input type="text" placeholder="Nom" name="nom" id="nom" required>
          </div>
          <div class="telephone">
            <input type="email" placeholder="E-mail" name="email" id="email" required>
          </div>
          <div class="subject">
            <input type="text" placeholder="Objet" name="objet" id="objet" required>
          </div>
          <div class="message">
            <textarea name="message" placeholder="message" id="message" cols="30" rows="5" required></textarea>
          </div>
          <div class="submit">
            <input type="submit" value="Envoyer" id="form_button" />
          </div>
        </form>
        <div class="text_contact">
          <p>
            La WebTV a été créée en 2019 par Alain Lamboux-Durand, actuellement chef du département MMI de l’IUT de Belfort-Montbéliard.

            Les personnes qui dirigent la WebTV sont Stéphanie CHATELAIN (Community Manger - Assistante de communication à l’IUT de Belfort-Montbéliard) et Willy YVART (Maître de conférences chez IUT de Belfort-Montbéliard).
            <br>
            Lors des cours du jeudi après-midi, qui servent à apprendre les bases de l’audiovisuel, Stéphanie Chatelain s’occupe de la partie rédactionnelle (préparation des interviews, organise le calendrier des évènements à couvrir…).
            Quant à Willy Yvart, il est chargé de la partie technique (montage des émissions, préparation des équipements pour l’émission…).
            <br>
            Contact des responsables de la WebTV de l’IUT de Belfort-Montbéliard :
            <br>
            alain.lamboux-durand@univ-fcomte.fr
            stephanie.chatelain@univ-fcomte.fr
            willy.yvart@neuf.fr
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  created() {
    const normalizeContactForm7Response = (response) => {
      // The other possible statuses are different kind of errors
      const isSuccess = response.status === 'mail_sent';
      // A message is provided for all statuses
      const message = response.message;
      const validationError = isSuccess
        ? {}
        : // We transform an array of objects into an object
        Object.fromEntries(
          response.invalid_fields.map((error) => {
            // Extracts the part after "cf7-form-control-wrap"
            const key = /cf7[-a-z]*.(.*)/.exec(error.into)[1];

            return [key, error.message];
          })
        );

      return {
        isSuccess,
        message,
        validationError,
      };
    };
  }
}
</script>

<style scoped>

.bg_contact {
  background-repeat: no-repeat;
  background-size: cover;
  height: 800px;
  margin-top: -80px;
}
#container h1 {
  font-family: 'Days One', sans-serif;
  color: #FFFFFF;
  padding-top: 80px;
  text-align: left;
}

button {
  overflow: visible;
}

button, select {
  text-transform: none;
}

button, input, select, textarea {
  color: #5A5A5A;
  font: inherit;
  margin: 0;
}

input {
  line-height: normal;
}

textarea {
  overflow: auto;
}

.contact_flex {
  display: flex;
  flex: 50%;
  justify-content: space-around;
  margin-bottom: 900px;
  color: #FFFFFF;
}

.text_contact p {
  max-width: 350px;
  text-align: justify;
}

@media screen and (max-width: 1200px){
  .contact_flex {
    flex-direction: column;
    max-width: 600px;
    justify-content: center;
  }
  .text_contact p {
    margin-left: auto;
    margin-right: auto;
    position: relative;
  }
  .bg_contact {
    height: 1400px;
  }
}

@media screen and (max-width: 1100px) {
  #container {
    width: 400px;
    margin-bottom: 1200px;
  }
  .bg_contact {
    height: 1400px;
  }
}

#container {
  max-width: 1000px;
  margin: 60px auto;
  margin-top: 200px;
}

form {
  padding: 37.5px;
  margin: 50px 0;
}

.email {
  float: right;
  width: 45%;
}

input[type='text'], [type='email'], select, textarea {
  background: none;
  border: none;
  border-bottom: solid 1px #ffffff;
  color: #FFFFFF;
  font-size: 1.000em;
  font-weight: 400;
  letter-spacing: 1px;
  margin: 0em 0 1.875em 0;
  padding: 0 0 0.875em 0;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

input[type='text']:focus, [type='email']:focus, textarea:focus {
  outline: none;
  padding: 0 0 0.875em 0;
}

.message {
  float: none;
}

.name {
  float: left;
  width: 45%;
}

select {
  background: url('https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-down-32.png') no-repeat right;
  outline: none;
  -moz-appearance: none;
  -webkit-appearance: none;
}

select::-ms-expand {
  display: none;
}

.subject {
  width: 100%;
}

.telephone {
  width: 100%;
}

textarea {
  line-height: 150%;
  height: 150px;
  resize: none;
  width: 100%;
}

::-webkit-input-placeholder {
  color: #FFFFFF;
}

:-moz-placeholder {
  color: #FFFFFF;
  opacity: 1;
}

::-moz-placeholder {
  color: #FFFFFF;
  opacity: 1;
}

:-ms-input-placeholder {
  color: #FFFFFF;
}

#form_button {
  background: none;
  border-radius: 50px;
  border: solid 2px #85F2DE;
  color: #85F2DE;
  cursor: pointer;
  display: inline-block;
  font-family: 'Mukta', sans-serif;
  font-size: 0.875em;
  font-weight: bold;
  outline: none;
  padding: 10px 20px;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

#form_button:hover {
  background: #85F2DE;
  color: #F2F3EB;
}

</style>
