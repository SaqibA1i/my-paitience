import {Request, Response} from 'express';
import dao from "../repositories/dao";
import dt from "../utils/dateTime";

export default class {
    static async getAppointmentbyUserID(req: Request, res: Response, next: Function) {
        try {
            console.log("get appointment (byUserID) called");
            console.log(req.query);
            
            console.log("finding appointments");
            let appointments: any;
            let user_id = req.query.user_id;
            if (typeof user_id == "string")
            {
                try {
                    appointments = await dao.all(`SELECT 
                                            DATE(appointments.date) as date, 
                                            TIME(appointments.date) as time,
                                            doctors.name, 
                                            doctors.phone, 
                                            doctors.img_src 
                                        FROM appointments, users, doctors
                                        WHERE users.user_id = ? AND
                                            appointments.doctor_id = doctors.doctor_id
                                        `, 
                                        [user_id]);
                } catch (error) {
                    console.log(error);
                }
            }
            if (!appointments) {
                console.log("no appointments found");
                return res.status(404).send(appointments);
            }

            let formatted: Object[] = [];

            for (const appt of appointments) {
                console.log(appt);
                let fTime = dt.formatTime(appt.time);
                let obj = {date: appt.date,
                    time: fTime,
                    name: appt.name,
                    phone: appt.phone,
                    img_src: appt.img_src
                };
                formatted.push(obj);                
            }
            
            let data = {"appointments": formatted};
            console.log("sending data");
            console.log(data)
            res.json(data);
        }
        catch (err) {
            console.log(err);
        }
    }

    static async getDoctorsFromAppts(req: Request, res: Response, next: Function) {
        try {
            console.log("get doctor (byUserID) called");
            console.log(req.query);
            
            console.log("finding doctors from appointments");
            let doctors;
            let user_id = req.query.user_id;
            if (typeof user_id == "string")
            {
                try {
                    doctors = await dao.all(`SELECT DISTINCT
                                            doctors.name, 
                                            doctors.phone, 
                                            doctors.img_src 
                                        FROM appointments, users, doctors
                                        WHERE users.user_id = ? AND
                                            appointments.doctor_id = doctors.doctor_id
                                        `, 
                                        [user_id]);
                } catch (error) {
                    console.log(error);
                }
            }
            if (!doctors) {
                console.log("no doctors found");
                return res.status(404).send(doctors);
            }
            
            let data = {"doctors": doctors};
            console.log("sending data");
            console.log(data)
            res.json(data);
        }
        catch (err) {
            console.log(err);
        }
    }

    static async addAppointment(req: Request, res: Response, next: Function) {
        console.log("Add appt post request");
        console.log(req.body);
        try {
        let ret = await dao.run(`INSERT INTO appointments (date, user_id,
            doctor_id) VALUES (?, ?, ?)
        `, [req.body.date, req.body.user_id, req.body.doctor_id]);
        console.log(ret);
        } catch (err) {
            console.log(err);
            res.sendStatus(400);
        }
        res.sendStatus(200);
    }

    static async deleteAppointment(req: Request, res: Response, next: Function) {
        console.log("Delete appointment post request");
        console.log(req.body);
        try {
            let ret = await dao.run(`DELETE FROM appointments WHERE 
                    appointment_id = ?
                `, [req.body.appointment_id]
            );
        } catch (err) {
            console.log(err);
            res.sendStatus(400);
        }
        res.sendStatus(200);

    }
}