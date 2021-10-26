import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { List } from "./list.model";

@Injectable({providedIn: 'root'})
export class ListService {
    private baseUrl:string = "https://crunchyroll-dbc01-default-rtdb.firebaseio.com/";
    private listInfoEndpoint:string = 'list.json';
    
    constructor(private http: HttpClient) {
    }

    getListInfo() {
        console.log(this.baseUrl + this.listInfoEndpoint);
        return this.http.get<List>(this.baseUrl + this.listInfoEndpoint);
    }

    modifyListInfo(data:List) {
        return this.http.put(this.baseUrl + this.listInfoEndpoint, data);
    }
}