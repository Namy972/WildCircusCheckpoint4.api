import { User } from './../models/user';
import { DbHandler } from '../core/db.handler';
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
        const postUser = await this.db.query(this.SAVE, user) as Promise<any>;
        return postUser;
    }

    async findByEmail(email: string) {
        const users = await (this.db.query(this.GET_BY_EMAIL, email) as Promise<User[]>);
        return users[0] || null;
    }

}
