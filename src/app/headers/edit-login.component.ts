import { Component } from '@angular/core';
import { LoginDatabaseService } from './login-database.service';
import { Login } from './login.model'
import { LoginService } from './login.service'

@Component({
    selector: 'edit-login',
    templateUrl: 'edit-login.component.html',
    styleUrls: ['./edit-login.component.css']
})

export class EditLoginComponent {
    constructor(private loginService:LoginService, private dbService:LoginDatabaseService) {
        dbService.showLoginData();
    }

    onEditLoginInfo(data:Login) {
        this.loginService.modifyLoginInfo(data).subscribe(data => {
            console.log("Updated information sent to backend");
        });
    }
}