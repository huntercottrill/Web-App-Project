import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Login } from "./login.model";

@Injectable({providedIn: 'root'})
export class LoginService {
    private baseUrl:string = "https://crunchyroll-dbc01-default-rtdb.firebaseio.com/";
    private loginInfoEndpoint:string = 'login.json';
    
    constructor(private http: HttpClient) {
    }

    getLoginInfo() {
        console.log(this.baseUrl + this.loginInfoEndpoint);
        return this.http.get<Login>(this.baseUrl + this.loginInfoEndpoint);
    }

    modifyLoginInfo(data:Login) {
        return this.http.put(this.baseUrl + this.loginInfoEndpoint, data);
    }
}