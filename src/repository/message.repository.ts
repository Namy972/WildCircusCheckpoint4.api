import { DbHandler } from './../core/db.handler';
import { Message } from '../models/message';
export class MessageRepository {
    private db: DbHandler;

    private GET_ALL = 'SELECT * FROM Message';
    private POST_MESSAGE = 'INSERT INTO Message SET ? ';
    private DELETE_MESSAGE = 'DELETE FROM Message WHERE id = ? ';

    constructor() {
        this.db = DbHandler.getInstance();
    }
    getAll(): Promise<Message[]> {
        const result = this.db.query(this.GET_ALL) as Promise<Message[]>;
        return result;
    }

    save(data: Message): Promise<any> {
        return this.db.query(this.POST_MESSAGE, data) as Promise<Message>;

    }

    async delete(id: number): Promise<Message> {
        const deleted = await this.db.query(this.DELETE_MESSAGE, id) as Promise<Message>;
        return deleted;
    }
}
