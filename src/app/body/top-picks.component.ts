import { Component, OnInit } from '@angular/core';
import { CardInfo } from './card-info.model';
import { CardInfoService } from './card-info.service';

@Component({
    selector: 'app-top-picks',
    templateUrl: 'top-picks.component.html',
    styleUrls: ['./top-picks.component.css']
})

export class TopPicksComponent implements OnInit {
    cardInfo: CardInfo[] | undefined;

    constructor(private cardInfoService:CardInfoService) {
    }

    ngOnInit(): void {
        console.log("Registering showCardInfo as a subscriber");
        this.showCardInfo();
    }

    showCardInfo() {
        this.cardInfoService.getCardInfo().subscribe((data: CardInfo[]) => {
            console.log(data);
            this.cardInfo = data;
        });
    }
}