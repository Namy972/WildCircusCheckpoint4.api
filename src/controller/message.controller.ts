import express, { Router, Request, Response, Application } from 'express';
import jwt from 'express-jwt';
import { MessageService } from 'src/services/message.service';

export const MessageController = (app: Application) => {

    const router: Router = express.Router();
    const service = new MessageService();

    router.post('/post', async (req: Request, res: Response) => {
            const message = req.body;
            try {
            const result = await service.save(message);
            res.send(result);
        } catch (error) {
            res.status(404).send('Récupération impossible');
        }
    });

    const secret = process.env.WILD_JWT_SECRET;
    if (!secret) {
        throw new Error('Pas de secret setup');
    }
    router.use(jwt({secret}));

    router.get('/', async (req: Request, res: Response) => {
        try {
            const result = await service.getAll();
            res.send(result);
        } catch (error) {
            res.status(404).send('Récupération impossible');
        }
    });

    router.delete('/delete/:id', async (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);
        try {
            const temDelete = await service.delete(id);
            res.send(temDelete);
        } catch (error) {
            res.status(409).send('Delete impossible');
        }
    });

    app.use('/message', router);
};
