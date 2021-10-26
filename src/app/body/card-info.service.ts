import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CardInfo } from "./card-info.model";

@Injectable({providedIn: 'root'})
export class CardInfoService {
    private baseUrl: string = "https://crunchyroll-dbc01-default-rtdb.firebaseio.com/";
    private cardInfoEndpoint: string = 'anime-info.json';
    
    constructor(private http: HttpClient) {
    }

    getCardInfo() {
        console.log('GETting: ' + this.baseUrl + this.cardInfoEndpoint);
        let cardInfo = this.http.get<CardInfo[]>(
          this.baseUrl + this.cardInfoEndpoint
        );
        return cardInfo;
    }
}