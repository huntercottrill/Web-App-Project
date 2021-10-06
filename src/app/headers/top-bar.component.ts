import { Component } from '@angular/core';
import { UserInfoComponent } from '../body/user-info.component';

@Component({
    selector: 'app-top-bar',
    templateUrl: 'top-bar.component.html',
    styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent extends UserInfoComponent {
    logo:String = "../../assets/images/crunchyrollbeta.PNG";
    link:String = "nav-link h-100 rounded-0";

    browse:String = "dropdown-item text-start py-2";
    browse2:String = "dropdown-item text-start py-2 top-bar"

    
}