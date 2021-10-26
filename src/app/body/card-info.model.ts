export class CardInfo {
    imagePath: string;
    subDub: string;
    title: string;
    type: string;

    constructor({
        imagePath,
        subDub,
        title,
        type,
    }: {
        imagePath: string;
        subDub: string;
        title: string;
        type: string;
    }) {
        this.imagePath = imagePath;
        this.subDub = subDub;
        this.title = title;
        this.type = type;
    }
}