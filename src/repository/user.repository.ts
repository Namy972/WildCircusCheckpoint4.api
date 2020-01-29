import { User } from './../models/user';
import { DbHandler } from '../core/db.handler';
import { Sport } from '../models/sport';
/**
 * Cette classe est un repository
 * C'est ici qu'on met tout les accès à la bdd
 * Attention, aucune logique javascript ne doit apparaitre ici.
 * Il s'agit seulement de la couche de récupération des données (requete sql)
 */
export class UserRepository {
    private db: DbHandler;

    private SAVE = 'INSERT INTO user SET ?';
    private GET_BY_EMAIL = ' SELECT * FROM user where email = ? ;';

    constructor() {
        this.db =  DbHandler.getInstance();
    }

    async save(user: User): Promise<any> {
        return this.db.query(this.SAVE, user) as Promise<any>;
    }

    async findByEmail(email: string) {
        const users: User[] = await (this.db.query(this.GET_BY_EMAIL, email) as Promise<User[]>);
        let user = null;
        if (users.length > 0) {
            user = users[0];
        }
        return user;
    }

}
