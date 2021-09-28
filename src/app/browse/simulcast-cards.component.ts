import { Component } from '@angular/core';
import { SeriesCard } from '../body/series-card.model';
import { card_info } from '../body/card-info.component';

@Component({
    selector: 'simulcast-cards',
    templateUrl: 'simulcast-cards.component.html'
})

export class SimulcastCardsComponent {
    cards:SeriesCard[] = [];

    constructor() {
        for (var card of card_info) {
            this.cards.push(new SeriesCard(card));
        }
    }
}