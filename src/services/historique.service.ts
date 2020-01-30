import { Historique } from './../models/historique';
import { HistoriqueRepository } from '../repository/historique.repository';

export class HistoriqueService {

    private repository: HistoriqueRepository;
    constructor() {
        this.repository = new HistoriqueRepository();
    }
    async getAllById(id: number) {
        const getAll = await this.repository.getAllByUserID(id);
        if (!getAll) {
            throw new Error('La requête n\'a pas abouti');
        }
        return getAll;
    }

    async save(data: Historique) {
        const messSave = await this.repository.save(data);

        if (!data) {
            throw new Error('Requête vide');
        }
        if (!messSave) {
            throw new Error('La requête n\'a pas abouti');
        }
        return messSave;
    }
}
