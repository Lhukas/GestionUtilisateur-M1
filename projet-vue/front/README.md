# projet_vue

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

## Informations

Ce projet se présente comme un gestionnaire d'utilisateurs, développé en utilisant
Vue.js. La conception visuelle des pages a été facilitée grâce à l'intégration de la bibliothèque Bootstrap. En
complément, la bibliothèque PrimeVue a été incorporée pour ajouter une variété de composants offrant des appels simples
et efficaces.

## Bibliothèques Utilisées

- Vue.js
- Bootstrap
- PrimeVue

## Fonctionnalités

Le gestionnaire d'utilisateurs offre les fonctionnalités suivantes :

- Affichage de tous les utilisateurs avec la possibilité de les modifier.
- Suppression d'utilisateurs existants.
- Création de nouveaux utilisateurs.

## Utilisation de PrimeVue

Dans ce projet, l'utilisation de `v-for` n'a pas été nécessaire grâce à PrimeVue et son composant DataTable, qui gère
automatiquement l'affichage des données. Cependant, ci-dessous se trouve un exemple de code utilisant `v-for` avec le
DataTable pour référence :

```html

<div class="container mt-4">
    <table class="table">
        <thead>
        <tr>
            <th scope="col">Id</th>
            <th scope="col">Username</th>
            <th scope="col">Nom</th>
            <th scope="col">Prenom</th>
            <th scope="col">Mail</th>
            <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        <!-- Utilisation de v-for avec le DataTable de PrimeVue -->
        <tr v-for="utilisateur in utilisateurs" :key="utilisateur.id">
            <td>{{ utilisateur.id }}</td>
            <td>{{ utilisateur.username }}</td>
            <td>{{ utilisateur.nom }}</td>
            <td>{{ utilisateur.prenom }}</td>
            <td>{{ utilisateur.mail }}</td>
            <td>
                <button class="btn btn-outline-primary btn-sm" @click="DialogueModif(utilisateur)">Modifier</button>
                <button class="btn btn-outline-danger btn-sm" @click="afficherConfirmation(utilisateur.id)">Supprimer</button>
            </td>
        </tr>
        </tbody>
    </table>
</div>
```
