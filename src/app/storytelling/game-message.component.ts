import {Component, OnInit} from '@angular/core';
import {MessageService} from './message.service';

@Component({
    selector: 'game-message',
    templateUrl: 'app/storytelling/game-message.component.html'
})

export class GameMessageComponent implements OnInit {
    messages: string[];

    constructor(
        private messageService: MessageService
    ) {}

    ngOnInit() {
        this.messages = this.messageService.getMessages();
    }
}
