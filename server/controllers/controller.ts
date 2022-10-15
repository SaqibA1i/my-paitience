import {Request, Response} from 'express';
import Doctor from "../models/doctor";
import dao from "../repositories/dao";



export default class {
    
    static async getHomebyUserID(req: Request, res: Response, next: Function) {
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

    static async getAppointmentbyUserID(req: Request, res: Response, next: Function) {
        try {
            console.log("get appointment (byUserID) called");
            console.log(req.query);
            
            console.log("finding appointments");
            let appointments;
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
            
            let data = {"appointments": appointments};
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
    
}

