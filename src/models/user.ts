export class User {
    id?: number;
    email!: string;
    password!: string;
    firstname!: string;
    lastname!: string;
    role!: string;
    
    constructor(input: User) {
        Object.assign(this, input);
    }
}
