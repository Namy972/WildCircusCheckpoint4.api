import { DbHandler } from './../core/db.handler';
import { Historique } from './../models/historique';
export class HistoriqueRepository {

private db: DbHandler;

    private GET_BY_USER_ID = 'SELECT * FROM historique WHERE user_id = ?';

constructor() {
    this.db = DbHandler.getInstance();
}
    async getHistoriqueByUserID(userId: number): Promise<Historique> {
        const historique = await this.db.query(this.GET_BY_USER_ID, userId) as Promise<Historique>;
        return historique;
    }
}
