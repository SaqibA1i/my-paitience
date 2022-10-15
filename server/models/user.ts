export default class User {
    id!: number;
    name!: string;
    phone!: string;
    img_src!: string;


    constructor(id: number, name: string, phone: string, img_src: string) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.img_src = img_src;
    }
}