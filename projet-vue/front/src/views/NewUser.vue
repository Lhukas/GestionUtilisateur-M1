<script>
import {addUser} from "@/services/user.serices";

export default {
  data() {
    return {
      userName: '',
      prenom: '',
      nom: '',
      mail: '',
    };
  },
  methods: {
    async ajouterUtilisateur() {
      console.log('Valeurs avant l\'appel à addUser :', this.userName, this.prenom, this.nom, this.mail);
      try {
        await addUser(this.userName, this.prenom, this.nom, this.mail);
        window.location.href = "/"
      } catch (error) {
        console.error('Erreur lors de l\'ajout de l\'utilisateur', error);
      }
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <h1>Ajouter un nouvel utilisateur</h1>
      <form @submit.prevent="ajouterUtilisateur" class="container">
        <div class="form-group">
          <label for="username">Nom d'utilisateur:</label>
          <input type="text" id="username" v-model="userName" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="firstName">Prénom:</label>
          <input type="text" id="firstName" v-model="prenom" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="lastName">Nom:</label>
          <input type="text" id="lastName" v-model="nom" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="email">E-mail:</label>
          <input type="email" id="email" v-model="mail" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary mt-2">Ajouter</button>
      </form>
    </div>
  </main>
</template>
