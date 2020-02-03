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

    private SAVE = 'INSERT INTO User SET ? ';
    private GET_BY_EMAIL = ' SELECT * FROM User WHERE email = ? ';
    private GET_BY_ID = ' SELECT * FROM User WHERE id = ? ';

    constructor() {
        this.db =  DbHandler.getInstance();
    }

    async save(user: User): Promise<any> {
        const postUser = await this.db.query(this.SAVE, user) as Promise<any>;
        return postUser;
    }

    async findByEmail(email: string) {
        const users = await (this.db.query(this.GET_BY_EMAIL, email));
        return users[0] || null;
    }
    async findById(id: number) {
        const user = await (this.db.query(this.GET_BY_ID, id));
        return user[0] || null;
    }

}
