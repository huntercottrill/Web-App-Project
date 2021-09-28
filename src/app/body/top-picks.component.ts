import { Component } from '@angular/core';
import { SeriesCard } from './series-card.model';
import { card_info } from './card-info.component';

@Component({
    selector: 'app-top-picks',
    templateUrl: 'top-picks.component.html',
    styleUrls: ['./top-picks.component.css']
})

export class TopPicksComponent {
    mobImg:string = "../../assets/images/Mob Psycho 100.jpg";
    gintamaImg:string = "../../assets/images/Gintama.jfif";
    kamuyImg:string = "../../assets/images/Golden Kamuy.PNG";
    fireImg:String = "../../assets/images/Fire Force.jpg";
    tanyaImg:String = "../../assets/images/Tonya.jpg";
    fenaImg:String = "../../assets/images/Fena Pirate.jpg";
    berserkImg:String = "../../assets/images/Berserk.jpg";
    junjiImg:String = "../../assets/images/Junji Ito.jpg";
    aceImg:String = "../../assets/images/Ace of the Diamond.PNG";
    overlordImg:String = "../../assets/images/Overlord.PNG";
    makerunaImg:String = "../../assets/images/Makeruna.PNG";
    yugiohImg:String = "../../assets/images/Yu-Gi-Oh.PNG";
    onepunchImg:String = "../../assets/images/One Punch Man.PNG";
    megaloImg:String = "../../assets/images/MegaloBox.PNG";
    ippoImg:String = "../../assets/images/Hajime no Ippo.PNG";
    clubImg:String = "../../assets/images/Going Home Club.PNG";
    millionImg:String = "../../assets/images/Million Lives.PNG";
    ninetyoneImg:String = "../../assets/images/91 Days.PNG";
    akagiImg:String = "../../assets/images/Akagi.PNG";
    theatreImg:String = "../../assets/images/Theatre.PNG";

    imgCard:String = "card-img-top rounded-0 top-picks";

    cards:SeriesCard[] = [];

    constructor() {
        for (var card of card_info) {
            this.cards.push(new SeriesCard(card));
        }
    }

    // cardProperties(id: string, image: string, alternative: string, name: string, seriesMovie: string, subDub: string) {
    //     const card = document.getElementById(id);

    //     const img = document.createElement("img");

    //     const div = document.createElement("div");

    //     const a = document.createElement("a");

    //     const p = document.createElement("p");

    //     const span = document.createElement("span");

    //     img.setAttribute('src', image);
    //     img.setAttribute('class', "card-img-top rounded-0");
    //     img.setAttribute('alt', alternative);
    //     img.setAttribute('style', "width:150px;height:200px;display:block;margin-left:-5px");
        
    //     div.setAttribute('class', "card-body");

    //     a.setAttribute('href', "#");
    //     a.setAttribute('class', "stretched-link");
    //     a.setAttribute('style', "text-decoration:none;color:white;margin-left:-18px");
    //     a.textContent = name;

    //     p.setAttribute('style', "color:turquoise;margin-top:10px;margin-left:-18px");
    //     p.textContent = seriesMovie;

    //     span.setAttribute('style', "color:gray");
    //     span.textContent = subDub;

    //     p.appendChild(span);
    //     a.appendChild(p);
    //     div.appendChild(a);
    //     card?.append(img, div);
    //     // div.appendChild(a);
    //     // a.appendChild(p);
    //     // p.appendChild(span);
    // }
}