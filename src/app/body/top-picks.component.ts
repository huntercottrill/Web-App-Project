import { Component, OnInit } from '@angular/core';
import { card_info } from './card-info.component';
import { CardInfo } from './card-info.model';
import { CardInfoService } from './card-info.service';
import { DatabaseService } from './database.service';
import { SeriesCard } from './series-card.model';

@Component({
    selector: 'app-top-picks',
    templateUrl: 'top-picks.component.html',
    styleUrls: ['./top-picks.component.css']
})

export class TopPicksComponent {
    // cardInfo: CardInfo[] | undefined;

    cards:SeriesCard[] = [];

    constructor(private dbService:DatabaseService) {
        dbService.showData();
        for (var card of card_info) {
            this.cards.push(new SeriesCard(card));
        }
    }

    // constructor(private cardInfoService:CardInfoService, private dbService:DatabaseService) {
    //     dbService.showData();
    // }
    // ngOnInit(): void {
    //     console.log("Registering showCardInfo as a subscriber");
    //     this.showCardInfo();
    // }

    // showCardInfo() {
    //     this.cardInfoService.getCardInfo().subscribe((data: CardInfo[]) => {
    //         console.log(data);
    //         this.cardInfo = data;
    //     });
    // }
}