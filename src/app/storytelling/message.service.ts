import {Injectable} from '@angular/core';

@Injectable()
export class MessageService {
    messages = ['fu', 'rin', 'ka', 'zan'];

    constructor() {}

    getMessages() {
        return this.messages;
    }

    addMessage(newMessage: string) {
        this.messages.push(newMessage);
    }
}
