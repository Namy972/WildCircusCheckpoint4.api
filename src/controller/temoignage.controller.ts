import express, { Router, Request, Response, Application } from 'express';
import jwt from 'express-jwt';
import { TemoignageService } from '../services/temoignage.service';

export const TemoignageController = (app: Application) => {

    const router: Router = express.Router();
    const service = new TemoignageService();

    router.get('/validated', async (req: Request, res: Response) => {
        try {

            const result = await service.getValidated();
            res.send(result);
        } catch (error) {
            res.status(404).send('Récupération impossible');
        }
    });

    // const secret = process.env.WILD_JWT_SECRET;
    // if (!secret) {
    //     throw new Error('Pas de secret setup');
    // }
    // router.use(jwt({secret}));

    router.get('/', async (req: Request, res: Response) => {
        try {
            const result = await service.getAll();
            res.send(result);
        } catch (error) {
            res.status(404).send('Récupération impossible');
        }
    });

    router.put('update/:id', async (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);
        const element = req.body;
        try {
            const update = await service.update(element, id);
            res.send(update);
        } catch (error) {
            res.status(409).send('Update impossible');
        }
    });

    router.post('/post', (req: Request, res: Response) => {
        const objectRequest = req.body;
        try {
            const temPost = service.save(objectRequest[0], objectRequest[1]);
            res.send(temPost);
        } catch (error) {
            res.status(409).send('Post impossible');
        }
    });

    router.delete('/delete/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);
        try {
            service.delete(id);
            res.send();
        } catch (error) {
            res.status(409).send('Delete impossible');
        }
    });

    app.use('/temoignage', router);
};
