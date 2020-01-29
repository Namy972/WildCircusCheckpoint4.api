export class Historique {
    id?: number;
    user_id!: number;
    nb_billets!: number;
    montant!: string;
    date!: string;

    constructor(input: Historique) {
        Object.assign(this, input);
    }
}
