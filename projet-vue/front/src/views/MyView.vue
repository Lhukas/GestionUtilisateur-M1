<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {deleteUser, getAllUser, getUserById, modifUser} from "@/services/user.serices";
import Dialog from 'primevue/dialog';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext'

let utilisateurs = ref([]);
let utilisateurASupprimerId = ref(null);
let afficherBoiteDialogueDelete = ref(false);
let afficherDialogModif = ref(false);
let userModif = ref({});

onMounted(async () => {
  try {
    const response = await getAllUser();
    utilisateurs.value = response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs', error);
  }
});

function afficherConfirmation(id) {
  utilisateurASupprimerId.value = id;
  afficherBoiteDialogueDelete.value = true;
}

function annulerSuppression() {
  afficherBoiteDialogueDelete.value = false;
}

async function confirmerSuppression() {
  if (utilisateurASupprimerId.value) {
    await deleteUser(utilisateurASupprimerId.value);
    afficherBoiteDialogueDelete.value = false;
    // Actualiser la liste des utilisateurs après la suppression
    const response = await getAllUser();
    utilisateurs.value = response.data;
  }
}

async function DialogueModif(utilisateur) {
  // Initialiser les champs du dialogue avec les valeurs actuelles de l'utilisateur
  const proxyObject = utilisateur;

  const {id} = proxyObject;
  userModif.value = await getUserById(id);
  afficherDialogModif.value = true;
}

function annulerModification() {
  // Réinitialiser les champs du dialogue
  afficherDialogModif.value = false;
}

async function confirmerModification() {
  afficherDialogModif.value = false;
  window.location.reload()
  await modifUser(userModif.value.data.id, userModif.value.data.username, userModif.value.data.nom, userModif.value.data.prenom, userModif.value.data.mail);
}


</script>

<template>
  <main>
    <div class="container mt-4">
      <DataTable :value="utilisateurs" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]"
                 tableStyle="min-width: 50rem">
        <Column field="id" header="Id" sortable></Column>
        <Column field="username" header="Username" sortable></Column>
        <Column field="nom" header="Nom" sortable></Column>
        <Column field="prenom" header="Prenom" sortable></Column>
        <Column field="mail" header="Mail" sortable></Column>
        <Column :exportable="false" style="min-width:8rem">
          <template #body="slotProps">
            <Button icon="pi pi-pencil" outlined class="mr-2 p-button-rounded me-2"
                    @click="DialogueModif(slotProps.data)"/>
            <Button icon="pi pi-trash" outlined rounded severity="danger"
                    @click="afficherConfirmation(slotProps.data.id)"/>
          </template>
        </Column>
      </DataTable>
    </div>
  </main>
  <Dialog v-model="afficherBoiteDialogueDelete" header="Confirmation" :visible="afficherBoiteDialogueDelete"
          :modal="true"
          :closable="false">
    <p>Êtes-vous sûr de vouloir supprimer cet utilisateur ?</p>
    <div class="p-dialog-footer">
      <Button label="Annuler" icon="pi pi-times" class="p-button-text" @click="annulerSuppression"/>
      <Button label="Supprimer" icon="pi pi-check" class="p-button-text" @click="confirmerSuppression"/>
    </div>
  </Dialog>

  <Dialog header="Modifier Utilisateur" :visible="afficherDialogModif"
          v-if="userModif && userModif.data" class="p-fluid" :closable="false">
    <!-- Champs modifiables ici -->
    <div class="p-field">
      <label for="nom">Id</label>
      <InputText id="nom" v-model="userModif.data.id" disabled="true" class="p-inputtext"/>
    </div>
    <div class="p-field">
      <label for="nom">Username</label>
      <InputText id="nom" v-model="userModif.data.username" disabled="true" class="p-inputtext"/>
    </div>
    <div class="p-field">
      <label for="nom">Nom</label>
      <InputText id="nom" v-model="userModif.data.nom" class="p-inputtext" required/>
    </div>
    <div class="p-field">
      <label for="prenom">Prénom</label>
      <InputText id="prenom" v-model="userModif.data.prenom" class="p-inputtext" required/>
    </div>
    <div class="p-field">
      <label for="mail">E-mail</label>
      <InputText id="mail" v-model="userModif.data.mail" class="p-inputtext" required/>
    </div>

    <!-- Boutons de confirmation/annulation -->
    <div class="p-dialog-footer">
      <Button label="Annuler" icon="pi pi-times" class="p-button-text" @click="annulerModification"/>
      <Button label="Modifier" icon="pi pi-check" class="p-button-text" @click="confirmerModification"/>
    </div>
  </Dialog>
</template>


<style>

</style>