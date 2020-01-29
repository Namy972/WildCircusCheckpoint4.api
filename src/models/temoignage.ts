export  class Temoignage {
    public id!: number;
    public user_id!: number;
    public content!: string;
    public note!: number;
    validated!: boolean;

    constructor(input: Temoignage) {
        Object.assign(this, input);
    }
}
