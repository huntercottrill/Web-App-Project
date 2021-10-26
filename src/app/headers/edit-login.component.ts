import { Component } from '@angular/core'
import { Login } from './login.model'
import { LoginService } from './login.service'

@Component({
    selector: 'edit-login',
    templateUrl: 'edit-login.component.html',
    styleUrls: ['./edit-login.component.css']
})

export class EditLoginComponent {
    constructor(private loginService:LoginService) {
    }

    onEditLoginInfo(data:Login) {
        this.loginService.modifyLoginInfo(data).subscribe(data => {
            console.log("Updated information sent to backend");
        });
    }
}