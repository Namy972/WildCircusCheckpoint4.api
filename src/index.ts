import express from 'express';
import { SportController } from './controller/sport.controller';

import loaders from './loaders';
import { AuthService } from './services/auth.service';

async function startServer() {
  // Récupération de l'application initiale
  const app = express();

  // Chargement des différent loader
  await loaders(app);

  // Ajout des différentes route de votre application
  SportController(app);

  const authService = new AuthService();
  // authService.signup({email: 'toto@to.com', password: 'mypassword', firstname: 'Toto'});
  authService.signin('toto@to.com', 'mypassword');

  // Démarrage du serveur une fois que tout est correctement init
  app.listen(3000, () => console.log('Express server  is running'));
}

startServer();
