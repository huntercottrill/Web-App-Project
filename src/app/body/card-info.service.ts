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
        console.log(this.baseUrl + this.cardInfoEndpoint);
        return this.http.get<CardInfo[]>(this.baseUrl + this.cardInfoEndpoint);
    }
}