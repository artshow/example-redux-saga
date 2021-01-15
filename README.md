npm run start

1 - Fichier './App.js' -> Je dispatch mon action pour récupérer la liste des utilisateurs
2 - Fichier './sagas/user.js' -> Toutes les actions users.
La fonction getUsersRequest essaye de récupéré les données de l'API avec le *call(getUsers,payload)* / getUsers qui me permet de faire l'appel avec axios.

3 - Le fichier './sagas/index.js' importe tous les fichiers sagas. (en gros comme le fichier index.js dans les reducers);
