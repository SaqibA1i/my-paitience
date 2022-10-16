import { Request, Response } from 'express';
import dao from "../repositories/dao";

export default class {
    static async getMonitoringbyUserID(req: Request, res: Response, next: Function) {
        try {
            console.log("get monitoring (byUserID) called");
            console.log(req.query);

            console.log("finding monitoring data");
            let cholesterol = Object();
            let user_id = req.query.user_id;
            if (typeof user_id == "string") {
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
            if (typeof user_id == "string") {
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
            if (typeof user_id == "string") {
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
            if (typeof user_id == "string") {
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
                let value = Math.round(entry.level / (height / 100) / (height / 100) * 100) / 100;
                let obj = {
                    level: value,
                    date: entry.date
                };
                bmi.push(obj);
            }

            let data = {
                "cholesterol": cholesterol,
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