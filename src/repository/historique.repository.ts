import { DbHandler } from './../core/db.handler';
import { Historique } from './../models/historique';
export class HistoriqueRepository {

private db: DbHandler;

    private GET_BY_USER_ID = 'SELECT * FROM historique WHERE user_id = ?';
    private POST_NEW_HISTO = 'INSERT INTO historique';

constructor() {
    this.db = DbHandler.getInstance();
}
    async getAllByUserID(userId: number): Promise<Historique> {
        const historique = await this.db.query(this.GET_BY_USER_ID, userId) as Promise<Historique>;
        return historique;
    }

    async save(histo: Historique): Promise<Historique> {
        const histoPost = await this.db.query(this.POST_NEW_HISTO, histo) as Promise<Historique>;
        return histoPost;
    }
}
