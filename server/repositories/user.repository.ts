import dao from './dao';
import User from '../models/user';
import Doctor from '../models/doctor'


export default class {
    static async getDoctorData(id: string): Promise<Doctor> {
        console.log("getdoctordata called");
        const doctor = await dao.get("SELECT * FROM doctors WHERE id = ?", [id]);
        
        return <Doctor>doctor;
    }
}