import { MessageController } from './controller/message.controller';
import { TemoignageController } from './controller/temoignage.controller';
import express from 'express';

import loaders from './loaders';
import { AuthService } from './services/auth.service';
import { HistoriqueController } from './controller/historique.controller';

async function startServer() {
  // Récupération de l'application initiale
  const app = express();

  // Chargement des différent loader
  await loaders(app);

  // Ajout des différentes route de votre application
  HistoriqueController(app);
  TemoignageController(app);
  MessageController(app);

  const authService = new AuthService();
  // authService.signup({email: 'toto@to.com', password: 'mypassword', firstname: 'Toto'});

  // Démarrage du serveur une fois que tout est correctement init
  app.listen(3000, () => console.log('Express server  is running'));
}

startServer();
