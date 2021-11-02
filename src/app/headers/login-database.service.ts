import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database"
import { Observable } from "rxjs";
import { Login } from "./login.model"

@Injectable({
    providedIn: 'root'
})
export class LoginDatabaseService {
    items: Observable<Login []>
    constructor(private db:AngularFireDatabase) {
        console.log("Setting up Firebase communication");
        this.items = this.db.list<Login>('login').valueChanges();
    }

    public showLoginData() {
        this.items.subscribe((data: Login []) => {
            console.log("Data received");
            for (let item of data) {
                console.log(item);
            }
        })
    }
}