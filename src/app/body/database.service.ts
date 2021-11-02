import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database"
import { Observable } from "rxjs";
import { CardInfo } from "./card-info.model";

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {
    items: Observable<CardInfo []>
    constructor(private db:AngularFireDatabase) {
        console.log("Setting up Firebase communication");
        this.items = this.db.list<CardInfo>('anime-info').valueChanges();
    }

    public showData() {
        this.items.subscribe((data: CardInfo []) => {
            console.log("Data received");
            for (let item of data) {
                console.log(item);
            }
        })
    }
}