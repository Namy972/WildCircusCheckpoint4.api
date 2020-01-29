import { DbHandler } from './../core/db.handler';
import { Message } from 'src/models/message';
export class MessageRepository {
    private db: DbHandler;

    private GET_ALL = 'SELECT * FROM message';
    private POST_MESSAGE = 'INSERT INTO message SET ?';
    private DELETE_MESSAGE = 'DELETE FROM message WHERE id = ?';

    constructor() {
        this.db = DbHandler.getInstance();
    }
    async getAll(): Promise<Message[]> {
        const result = await this.db.query(this.GET_ALL) as Promise<Message[]>;
        return result;
    }

    async save(data: Message): Promise<Message> {
        const posted = await this.db.query(this.POST_MESSAGE, data) as Promise<Message>;
        return posted;
    }

    async delete(id: number): Promise<Message> {
        const deleted = await this.db.query(this.DELETE_MESSAGE, id) as Promise<Message>;
        return deleted;
    }
}
