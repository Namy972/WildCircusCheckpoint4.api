import { MessageRepository } from '../repository/message.repository';
import { Message } from '../models/message';

export class MessageService {

    private repository: MessageRepository;
    constructor() {
        this.repository = new MessageRepository();
    }
    async getAll() {
        const getAll = await this.repository.getAll();

        return getAll;
    }

    async save(data: Message) {
        return await this.repository.save(data);
    }

    async delete(id: number) {
        return this.repository.delete(id);

    }
}
