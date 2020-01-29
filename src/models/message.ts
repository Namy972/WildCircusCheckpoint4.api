export class Message {
    id?: number;
    email!: string;
    content!: string;

    constructor(input: Message) {
        Object.assign(this, input);
    }
}
