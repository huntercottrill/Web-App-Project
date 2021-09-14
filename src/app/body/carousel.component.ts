import { Component } from '@angular/core'

@Component({
    selector: 'app-carousel',
    templateUrl: 'carousel.component.html',
    styleUrls: ['./carousel.component.css']
})

export class CarouselComponent {
    fenaImg:String = "../../assets/images/Fena Crunchyroll.png";
    mhaImg:String = "../../assets/images/MHA Crunchyroll.png";
    borutoImg:String = "../../assets/images/Boruto Crunchyroll.png";
    jujutsuImg:String = "../../assets/images/Jujutsu Crunchyroll.jpg";
    tokyoImg:String = "../../assets/images/TokyoRev Crunchyroll.png";
    tomoImg:String = "../../assets/images/Tomo Crunchyroll.jpg";

    carous:String = "d-block w-100";
}