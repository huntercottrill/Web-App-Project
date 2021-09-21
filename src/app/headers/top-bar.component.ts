import { Component } from '@angular/core';

@Component({
    selector: 'app-top-bar',
    templateUrl: 'top-bar.component.html',
    styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent {
    logo:String = "../../assets/images/crunchyrollbeta.PNG";
    link:String = "nav-link h-100 rounded-0";

    browse:String = "dropdown-item text-start py-2";

    // constructor(private router: Router) { }

    // navigateToSearch() {
    //     this.router.navigate(['search'])
    // }
}