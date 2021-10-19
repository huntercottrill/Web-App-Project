import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "card-build",
    templateUrl: "card-builder.component.html",
    styleUrls: ['card-builder.component.css']
})

export class CardBuildComponent {
    imgCard:String = "card-img-top rounded-0 top-picks";
    @Input() 
    title! : string;
    @Input()
    type! : string;
    @Input()
    subDub! : string;
    @Input()
    imagePath!: string;
}