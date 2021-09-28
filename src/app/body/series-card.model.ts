export class SeriesCard {
    title: string;
    type: string;
    subDub: string;
    imagePath: string;

    constructor({title, type, subDub, imagePath} :
        {title:string, type:string, subDub:string, imagePath:string}) {
            this.title = title;
            this.type = type;
            this.subDub = subDub;
            this.imagePath = imagePath;
        }
}