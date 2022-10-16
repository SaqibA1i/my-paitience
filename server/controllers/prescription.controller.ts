import {Request, Response} from 'express';
import dao from "../repositories/dao";
import dt from "../utils/dateTime";


export default class {
    static async getPrescriptionbyUserID(req: Request, res: Response, next: Function) {
        try {
            console.log("get prescription (byUserID) called");
            console.log(req.query);
            
            console.log("finding prescriptions");
            let prescriptions = Object();
            let user_id = req.query.user_id;
            if (typeof user_id == "string")
            {
                try {
                    prescriptions = await dao.all(`SELECT DISTINCT
                                            prescriptions.medication as medication,
                                            time(prescriptions.time) as time,
                                            prescriptions.instructions,
                                            doctors.name as doctor_name
                                        FROM prescriptions, doctors
                                        WHERE prescriptions.user_id = ? AND
                                            prescriptions.doctor_id = doctors.doctor_id
                                        `, 
                                        [user_id]);
                } catch (error) {
                    console.log(error);
                }
            }
            if (!prescriptions) {
                console.log("no prescriptions found");
                return res.status(404).send(prescriptions);
            }
            
            console.log(typeof prescriptions);
            console.log(prescriptions);

            let final_prescriptions:any = [];

            for (const prescription of prescriptions) {
                console.log(prescription);
                let appended = 0;
                for (const final_prescription of final_prescriptions) {
                    console.log(typeof final_prescription);
                    if (prescription.medication == final_prescription.medication) {
                        console.log(final_prescription);
                        final_prescription.time.push(dt.formatTime(prescription.time));
                        appended = 1;
                    }
                }
                if (!appended) {
                    let arr:any = [];
                    arr.push(dt.formatTime(prescription.time));
                    let obj = {medication: prescription.medication,
                        time: arr,
                        instructions: prescription.instructions,
                        doctor_name: prescription.doctor_name
                        };
                    final_prescriptions.push(obj);
                }
            }
            
            let data = {"prescriptions": final_prescriptions};
            console.log("sending data");
            console.log(data);
            res.json(data);
        }
        catch (err) {
            console.log(err);
        }
    }

    static async addPrescription(req: Request, res: Response, next: Function) {
        console.log("Add prescription post request");
        console.log(req.body);
        try {
            let ret = await dao.run(`INSERT INTO prescriptions (medication, time,
                instructions, user_id, doctor_id) VALUES (?, ?, ?, ?, ?)
                `, [req.body.medication, req.body.time, req.body.instructions,
                    req.body.user_id, req.body.doctor_id]
            );
        } catch (err) {
            console.log(err);
            res.sendStatus(400);
        }
        res.sendStatus(200);
    }
}