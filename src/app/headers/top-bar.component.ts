import { Component, OnInit} from '@angular/core';
import { Login } from './login.model';
import { LoginService } from './login.service';

@Component({
    selector: 'app-top-bar',
    templateUrl: 'top-bar.component.html',
    styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent implements OnInit {
    logo:String = "../../assets/images/crunchyrollbeta.PNG";
    link:String = "nav-link h-100 rounded-0";

    browse:String = "dropdown-item text-start py-2";
    browse2:String = "dropdown-item text-start py-2 top-bar"

    login: Login | undefined;

    constructor(private loginService: LoginService) {
    }
    ngOnInit(): void {
        console.log("Registering showLoginInfo as a subscriber");
        this.showLoginInfo();
    }

    showLoginInfo() {
        this.loginService.getLoginInfo().subscribe((data: Login) => {
            console.log(data);
            this.login = data;
        })
    }
}