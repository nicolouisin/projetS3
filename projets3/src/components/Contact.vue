<template>
  <div :style="{ backgroundImage: 'url(' + require('@/assets/images/background_contact.png') + ')' }"class="bg_contact">
  <div id="container">
  <h2>Contact
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
      <g id="Ellipse_2" data-name="Ellipse 2" fill="#85f2de" stroke="#000" stroke-width="1.5">
        <circle cx="7" cy="7" r="7" stroke="none"/>
        <circle cx="7" cy="7" r="6.25" fill="none"/>
      </g>
    </svg>
  </h2>
  <form action="#" method="post" id="contact_form">
    <div class="name">
      <input type="text" placeholder="Prenom" name="name" id="name_input" required>
    </div>
    <div class="email">
      <input type="text" placeholder="Nom" name="name" id="email_input" required>
    </div>
    <div class="telephone">
      <input type="email" placeholder="E-mail" name="email" id="email" required>
    </div>

    <div class="subject">
      <select placeholder="Objet" name="subject" id="subject_input" required>
        <option disabled hidden selected>Objets</option>
        <option>I'd like to start a project</option>
        <option>I'd like to ask a question</option>
        <option>I'd like to make a proposal</option>
      </select>
    </div>
    <div class="message">
      <textarea name="message" placeholder="Message" id="message_input" cols="30" rows="5" required></textarea>
    </div>
    <div class="submit">
      <input type="submit" value="Envoyer" id="form_button" />
    </div>
  </form>
  </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>

.bg_contact {
  background-repeat: no-repeat;
  background-size: cover;
  height: 800px;
  margin-top: -80px;
}
#container h2 {
  font-family: 'Days One', sans-serif;
  color: #FFFFFF;
  padding-top: 40px;
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

#container {
  max-width: 650px;
  margin: 60px auto;
  position: relative;
  margin-top: 200px;
  margin-left: 20px;
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
