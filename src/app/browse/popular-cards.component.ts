import { Component } from '@angular/core';
import { SeriesCard } from '../body/series-card.model';
import { card_info } from '../body/card-info.component';

@Component({
    selector: 'popular-cards',
    templateUrl: 'popular-cards.component.html'
})

export class PopularCardsComponent {
    cards:SeriesCard[] = [];

    constructor() {
        for (var card of card_info) {
            this.cards.push(new SeriesCard(card));
        }
    }
}