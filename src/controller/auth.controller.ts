import { AuthService } from '../services/auth.service';
import express, { Router, Request, Response, Application, response } from 'express';
import { User } from 'src/models/user';

/**
 * Le controller vous servira à réceptionner les requêtes associées aux utilisateurs
 *
 * @param app l'application express
 */
export const AuthController = (app: Application) => {

    const authService = new AuthService();
    const authRouter: Router = express.Router();

    authRouter.post('/signup', async (req: Request, res: Response) => {
        const user = req.body;
        try {
            await authService.signup(user);
            res.send('Record Ok');

        } catch (error) {
            res.status(409).send('Email déjà existant');
        }
    });

    authRouter.post('/signin', async (req: Request, res: Response) => {
        const userB: User = req.body ;
        try {
            const {token, user} = await authService.signin(userB.email, userB.password);
            res.set('access-control-expose-headers', 'JWT-TOKEN');
            res.set('JWT-TOKEN', token); // renvoi du token dans le header, le user dans le body
            res.send(user);
        } catch (error) {

            res.status(409).send('Erreur dans la requete');
        }
    });
    authRouter.get('/me', async (req: Request, res: Response) => {
        const user = await authService.getById((req as any).user.id);
        if (!user) {
            res.status(400).send('Aucun utilisateur trouvé');
        }
        res.send(user);
    });

    app.use('/auth', authRouter);
};
