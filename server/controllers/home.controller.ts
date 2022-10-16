import {Request, Response} from 'express';
import dao from "../repositories/dao";
import dt from "../utils/dateTime";



export default class {
    
    static async getDoctorbyUserID(req: Request, res: Response, next: Function) {
        try {
            console.log("gethome (byUserID) called");
            console.log(req.query);
            
            console.log("finding doctor");
            let doctor;
            let user_id = req.query.user_id;
            if (typeof user_id == "string")
            {
                try {
                    doctor = await dao.get(`SELECT 
                                            doctors.doctor_id, 
                                            doctors.name, 
                                            doctors.phone, 
                                            doctors.img_src 
                                        FROM doctors, users 
                                        WHERE user_id = ?`, 
                                        [user_id]);
                } catch (error) {
                    console.log(error);
                }
            }
            if (!doctor) {
                console.log("no doctor found");
                return res.status(404).send(doctor);
            }
            
            let data = {"doctor": doctor};
            console.log("sending data");
            console.log(data)
            res.json(data);
        }
        catch (err) {
            console.log(err);
        }
        
    }
    

    
    
}

