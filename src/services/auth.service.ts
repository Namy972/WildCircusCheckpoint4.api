import { User } from './../models/user';
import { SportRepository } from '../repository/sport.repository';
import { UserRepository } from '../repository/user.repository';
import * as argon2 from 'argon2';
import * as jwt from 'jsonwebtoken';

/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class AuthService {

    private repository: UserRepository;
    constructor() {
        this.repository = new UserRepository();
    }

    async signup(user: User) {
        user.password = await argon2.hash(user.password);
        this.repository.save(user);
    }

    async signin(email: string, password: string) {
        const user = await this.repository.findByEmail(email);
        if (!user) {
            throw new Error('Les informations ne sont pas valide');
        }
        const isValid = await argon2.verify(user.password, password);

        if (!isValid) {
            throw new Error('Les informations ne sont pas valide');
        }
        const userToken = {email: user.email, id: user.id, firstname: user.firstname};

        const secret = process.env.WILD_JWT_SECRET;
        if (!secret) {
            throw new Error('Pas de secret setup');
        }

        const token2 = jwt.sign(userToken,  secret);
        console.log(token2);

        return token2;
    }

}
