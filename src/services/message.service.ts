import { MessageRepository } from 'src/repository/message.repository';
import { Message } from 'src/models/message';

export class MessageService {

    private repository: MessageRepository;
    constructor() {
        this.repository = new MessageRepository();

    }

    async getAll() {
        const getAll = await this.repository.getAll();
        if (!getAll) {
            throw new Error('La requête n\'a pas abouti');
        }
        return getAll;
    }

    async save(data: Message) {
        const messSave = await this.repository.save(data);

        if (!data) {
            throw new Error('Requête vide');
        }
        if (!messSave) {
            throw new Error('La requête n\'a pas abouti');
        }
        return messSave;
    }
    async delete(id: number) {
        const deleted = await this.repository.delete(id);

        if (!deleted) {
            throw new Error('La requête n\'a pas abouti');
        }
        if (!id) {
            throw new Error('Id non spécifié');

        }
    }
}
