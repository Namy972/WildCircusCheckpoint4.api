import { DbHandler } from './../core/db.handler';
import { Temoignage } from 'src/models/temoignage';
export class TemoignageRepository {

    private db: DbHandler;

    private GET_ALL = 'SELECT * FROM temoignage';
    private GET_VALIDATED = 'SELECT * FROM temoignage WHERE validated = 1';
    private UPDATE = 'UPDATE temoignage SET validated = 1 WHERE id = ?';

    constructor() {
        this.db = DbHandler.getInstance();
    }
    async getAll(): Promise<Temoignage[]> {
        const result = await this.db.query(this.GET_ALL) as Promise<Temoignage[]>;
        return result;
    }
    async getValidated(): Promise<Temoignage[]> {
        const validated = await this.db.query(this.GET_VALIDATED) as Promise<Temoignage[]>;
        return validated;
    }
    async update(userId: number): Promise<Temoignage[]> {
        const updated = await this.db.query(this.UPDATE, userId) as Promise<Temoignage[]>;
        return updated;
    }
}
