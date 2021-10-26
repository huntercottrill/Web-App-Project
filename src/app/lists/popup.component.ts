import { Component } from '@angular/core'
import { ListService } from './list.service';
import { List } from './list.model';

@Component({
    selector: 'popup',
    templateUrl: 'popup.component.html',
    styleUrls: ['popup.component.css']
})

export class PopupComponent {
    constructor(private listService:ListService) {
    }

    onEditListInfo(data:List) {
        this.listService.modifyListInfo(data).subscribe(data => {
            console.log("Updated information sent to backend");
        });
    }
}