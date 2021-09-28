import { Component } from '@angular/core';
import { SeriesCard } from '../body/series-card.model';
import { card_info } from '../body/card-info.component';

@Component({
    selector: 'action-cards',
    templateUrl: 'action-cards.component.html',
    styleUrls: ['action-cards.component.css']
})

export class ActionCardsComponent {
    cards:SeriesCard[] = [];

    constructor() {
        for (var card of card_info) {
            this.cards.push(new SeriesCard(card));
        }
    }
}