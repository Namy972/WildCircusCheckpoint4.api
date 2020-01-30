import express, { Router, Request, Response, Application } from 'express';
import jwt from 'express-jwt';
import { HistoriqueService } from '../services/historique.service';

export const HistoriqueController = (app: Application) => {

    const router: Router = express.Router();
    const service = new HistoriqueService();

    const secret = process.env.WILD_JWT_SECRET;
    if (!secret) {
        throw new Error('Pas de secret setup');
    }
    router.use(jwt({secret}));

    router.post('/post', (req: Request, res: Response) => {
            const message = req.body;
            try {
            const result = service.save(message);
            res.send(result);
        } catch (error) {
            res.status(404).send('Récupération impossible');
        }
    });

    router.get('/:id', async (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);
        try {
            const result = await service.getAllById(id);
            res.send(result);
        } catch (error) {
            res.status(404).send('Récupération impossible');
        }
    });

    app.use('/historique', router);
};
