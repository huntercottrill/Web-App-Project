import { Component, Injectable } from "@angular/core";
import { UserInfoComponent } from "./user-info.component";

@Injectable()
@Component ({
    selector: 'username',
    templateUrl: 'username.component.html'
})

export class UserNameComponent extends UserInfoComponent {}