import {Component} from '@angular/core';
import {MessageService} from './message.service';

@Component({
    selector: 'game-message-sandbox',
    templateUrl: 'app/storytelling/game-message-sandbox.component.html'
})

export class GameMessageSandboxComponent {
    message: string = 'Test';

    constructor(
        private messageService: MessageService
    ) {}

    addMessage(message: string) {
        this.messageService.addMessage(message);
        this.message = '';
    }
}
