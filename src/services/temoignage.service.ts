import { Temoignage } from 'src/models/temoignage';
import { TemoignageRepository } from './../repository/temoignage.repository';
import { User } from 'src/models/user';

export class TemoignageService {

    private repository: TemoignageRepository;
    constructor() {
        this.repository = new TemoignageRepository();

    }

    async getAll() {
        const getAll = await this.repository.getAll();
        if (!getAll) {
            throw new Error('La requête n\'a pas abouti');
        }
        return getAll;
    }
    async getValidated() {
        const validated = await this.repository.getValidated();
        if (!validated) {
            throw new Error('La requête n\'a pas abouti');
        }
        return validated;
    }
    async update(id: number) {
        const updated = await this.repository.update(id);
        if (!updated) {
            throw new Error('La requête n\'a pas abouti');
        }
        if (!id) {
            throw new Error('Id non spécifié');

        }
        return updated;
    }
    async save(data: Temoignage, user: User) {
        data.user_id = user.id;
        const temSave = await this.repository.save(data);

        if (!user) {
            throw new Error('User non spécifié');
        }
        if (!temSave) {
            throw new Error('La requête n\'a pas abouti');
        }
        return temSave;
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
