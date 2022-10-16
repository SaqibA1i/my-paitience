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
                        final_prescription.time.push(prescription.time);
                        appended = 1;
                    }
                }
                if (!appended) {
                    let arr:any = [];
                    arr.push(prescription.time);
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

    static async getMonitoringbyUserID(req: Request, res: Response, next: Function) {
        try {
            console.log("get monitoring (byUserID) called");
            console.log(req.query);
            
            console.log("finding monitoring data");
            let cholesterol = Object();
            let user_id = req.query.user_id;
            if (typeof user_id == "string")
            {
                try {
                    cholesterol = await dao.all(`
                                        SELECT
                                            cholesterol.level as level,
                                            date(cholesterol.date) as date
                                        FROM cholesterol, users
                                        WHERE users.user_id = ?`, 
                                        [user_id]);
                } catch (error) {
                    console.log(error);
                }
            }
            if (!cholesterol) {
                console.log("no choleseterol found");
                return res.status(404).send(cholesterol);
            }
            // console.log("cholesterol");
            // console.log(cholesterol);

            let blood_pressure = Object();
            if (typeof user_id == "string")
            {
                try {
                    blood_pressure = await dao.all(`
                                        SELECT
                                            blood_pressure.systolic as systolic,
                                            blood_pressure.diastolic as diastolic,
                                            date(blood_pressure.date) as date
                                        FROM blood_pressure, users
                                        WHERE users.user_id = ?`, 
                                        [user_id]);
                } catch (error) {
                    console.log(error);
                }
            }
            if (!blood_pressure) {
                console.log("no blood_pressure found");
                return res.status(404).send(blood_pressure);
            }
            // console.log("blood_pressure");
            // console.log(blood_pressure);


            let blood_sugar = Object();
            if (typeof user_id == "string")
            {
                try {
                    blood_sugar = await dao.all(`
                                        SELECT
                                            blood_sugar.level as level,
                                            date(blood_sugar.date) as date
                                        FROM blood_sugar, users
                                        WHERE users.user_id = ?`, 
                                        [user_id]);
                } catch (error) {
                    console.log(error);
                }
            }
            if (!blood_sugar) {
                console.log("no blood_pressure found");
                return res.status(404).send(blood_sugar);
            }
            // console.log("blood_sugar");
            // console.log(blood_sugar);

            let weight = Object();
            if (typeof user_id == "string")
            {
                try {
                    weight = await dao.all(`
                                        SELECT
                                            weight.level as level,
                                            date(weight.date) as date,
                                            users.height
                                        FROM weight, users
                                        WHERE users.user_id = ?`, 
                                        [user_id]);
                } catch (error) {
                    console.log(error);
                }
            }
            if (!weight) {
                console.log("no blood_pressure found");
                return res.status(404).send(weight);
            }
            // console.log("weight");
            // console.log(weight);

            let bmi: any[] = [];
            let height = weight[0].height;
            
            for (const entry of weight) {
                console.log(entry);
                let value = Math.round(entry.level / (height / 100) / (height / 100) *100) / 100;
                let obj = {level: value,
                    date: entry.date
                };
                bmi.push(obj);                
            }
            
            let data = {"cholesterol": cholesterol,
                        "blood_pressure": blood_pressure,
                        "blood_sugar": blood_sugar,
                        "bmi": bmi
                };
            console.log("sending data");
            console.log(data);
            res.json(data);
        }
        catch (err) {
            console.log(err);
        }
    }
    
}

