import { Component } from '@angular/core';

@Component({
    selector: 'app-carousel-cards',
    templateUrl: 'carousel-cards.component.html',
    styleUrls: ['carousel-cards.component.css']
})

export class CarouselCardsComponent {
    card: String = "card bg-dark rounded-0 fw-bold";
    aCard: String = "card-body stretched-link rounded-0 text-decoration-none";
}