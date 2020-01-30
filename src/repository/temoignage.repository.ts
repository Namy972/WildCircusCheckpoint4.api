import { DbHandler } from './../core/db.handler';
import { Temoignage } from '../models/temoignage';
export class TemoignageRepository {

    private db: DbHandler;

    private GET_ALL = 'SELECT * FROM temoignage';
    private GET_VALIDATED = 'SELECT * FROM temoignage WHERE validated = 1';
    private UPDATE = 'UPDATE temoignage SET validated = 1 WHERE id = ?';
    private POST = 'INSERT INTO temoignage SET ?';
    private DELETE = 'DELETE FROM temoignage WHERE id = ?';

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
    async update(id: number): Promise<Temoignage> {
        const updated = await this.db.query(this.UPDATE, id) as Promise<Temoignage>;
        return updated;
    }

    async save(data: Temoignage): Promise<Temoignage> {
        const saved = await this.db.query(this.POST, data) as Promise<Temoignage>;
        return saved;
    }
    async delete(id: number): Promise<Temoignage> {
        const deleted = await this.db.query(this.DELETE, id) as Promise<Temoignage>;
        return deleted;
    }
}
