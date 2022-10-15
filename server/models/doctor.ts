export default class Doctor {
    id!: number;
    email!: string;
    password!: string;
    height!: number;
    doctor_id: number;


    constructor(email: string, password: string, id: number, height: number, doctor_id: number) {
        this.email = email;
        this.password = password;
        this.id = id;
        this.height = height;
        this.doctor_id = doctor_id;
    }
}