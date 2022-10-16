import * as sqlite from 'sqlite3'
const sqlite3 = sqlite.verbose();
const db = new sqlite3.Database('./db/sqlite.db');

export default class {
    static cleanDatabase() {
        db.serialize(function() {
            // Drop Tables
            const dropDoctorsTable = "DROP TABLE IF EXISTS doctors";
            db.run(dropDoctorsTable);
            const dropUsersTable = "DROP TABLE IF EXISTS users";
            db.run(dropUsersTable);
            const dropAppointmentsTable = "DROP TABLE IF EXISTS appointments";
            db.run(dropAppointmentsTable);
            const dropPrescriptionsTable = "DROP TABLE IF EXISTS prescriptions";
            db.run(dropPrescriptionsTable);
            const dropCholesterolTable = "DROP TABLE IF EXISTS cholesterol";
            db.run(dropCholesterolTable);
            const dropBloodPressureTable = "DROP TABLE IF EXISTS blood_pressure";
            db.run(dropBloodPressureTable);
            const dropBloodSugarTable = "DROP TABLE IF EXISTS blood_sugar";
            db.run(dropBloodSugarTable);
            const dropWeightTable = "DROP TABLE IF EXISTS weight";
            db.run(dropWeightTable);
        })
    }

    static setupDbForDev() {
        db.serialize(function() {
            // Drop Tables
            const dropDoctorsTable = "DROP TABLE IF EXISTS doctors";
            db.run(dropDoctorsTable);
            const dropUsersTable = "DROP TABLE IF EXISTS users";
            db.run(dropUsersTable);
            const dropAppointmentsTable = "DROP TABLE IF EXISTS appointments";
            db.run(dropAppointmentsTable);
            const dropPrescriptionsTable = "DROP TABLE IF EXISTS prescriptions";
            db.run(dropPrescriptionsTable);
            const dropCholesterolTable = "DROP TABLE IF EXISTS cholesterol";
            db.run(dropCholesterolTable);
            const dropBloodPressureTable = "DROP TABLE IF EXISTS blood_pressure";
            db.run(dropBloodPressureTable);
            const dropBloodSugarTable = "DROP TABLE IF EXISTS blood_sugar";
            db.run(dropBloodSugarTable);
            const dropWeightTable = "DROP TABLE IF EXISTS weight";
            db.run(dropWeightTable);

            //Create Tables
            const createDoctorsTable = `CREATE TABLE IF NOT EXISTS 
                doctors(
                    doctor_id INTEGER PRIMARY KEY AUTOINCREMENT, 
                    name TEXT, 
                    phone TEXT,
                    img_src TEXT
                )`;
            db.run(createDoctorsTable);
            const createUsersTable = `CREATE TABLE IF NOT EXISTS 
                users(
                    user_id INTEGER PRIMARY KEY AUTOINCREMENT, 
                    email TEXT, 
                    password TEXT, 
                    first_name TEXT,
                    last_name TEXT,
                    height INTEGER,
                    doctor_id INTEGER,
                    FOREIGN KEY (doctor_id) 
                        REFERENCES doctors(doctor_id)
                )`;
            db.run(createUsersTable);
            const createAppointmentsTable = `CREATE TABLE IF NOT EXISTS 
                appointments (
                    appointment_id INTEGER PRIMARY KEY AUTOINCREMENT, 
                    date TEXT,
                    user_id INTEGER,
                    doctor_id INTEGER,
                    FOREIGN KEY (user_id) REFERENCES users(user_id), 
                    FOREIGN KEY (doctor_id) REFERENCES doctors(doctor_id)
                )`;
            db.run(createAppointmentsTable);
            const createPrescriptionTable = `CREATE TABLE IF NOT EXISTS 
                prescriptions (
                    prescription_id INTEGER PRIMARY KEY AUTOINCREMENT, 
                    medication TEXT,
                    time TEXT,
                    instructions TEXT,
                    user_id INTEGER,
                    doctor_id INTEGER,
                    FOREIGN KEY (user_id) REFERENCES users(user_id),
                    FOREIGN KEY (doctor_id) REFERENCES doctors(doctor_id)
                )`;
            db.run(createPrescriptionTable);
            const createCholesterolTable = `CREATE TABLE IF NOT EXISTS 
                cholesterol (
                    cholesterol_id INTEGER PRIMARY KEY AUTOINCREMENT, 
                    level INTEGER,
                    date TIME,
                    user_id INTEGER,
                    FOREIGN KEY (user_id) REFERENCES users(user_id)
                )`;
            db.run(createCholesterolTable);
            const createBloodPressureTable = `CREATE TABLE IF NOT EXISTS 
            blood_pressure (
                blood_pressure_id INTEGER PRIMARY KEY AUTOINCREMENT, 
                systolic INTEGER,
                diastolic INTEGER,
                date DATE,
                user_id INTEGER,
                FOREIGN KEY (user_id) REFERENCES users(user_id)
            )`;
            db.run(createBloodPressureTable);
            const createBloodSugarTable = `CREATE TABLE IF NOT EXISTS 
            blood_sugar (
                blood_sugar_id INTEGER PRIMARY KEY AUTOINCREMENT, 
                level INTEGER,
                date DATE,
                user_id INTEGER,
                FOREIGN KEY (user_id) REFERENCES users(user_id)
            )`;
            db.run(createBloodSugarTable);
            const createWeightTable = `CREATE TABLE IF NOT EXISTS 
            weight (
                weight_id INTEGER PRIMARY KEY AUTOINCREMENT, 
                level INTEGER,
                date DATE,
                user_id INTEGER,
                FOREIGN KEY (user_id) REFERENCES users(user_id)
            )`;
            db.run(createWeightTable);

            
        })
    }

    static insertItems() {
        db.serialize(function() {
            const insertDoctors = `INSERT INTO doctors (name, phone, img_src) 
                VALUES 
                    ('Jane Doe', '(647) 123 5678', 'jane.jpg'),
                    ('Peter Wong', '(647) 123 5679', 'peter.jpg'),
                    ('James Smith', '(647) 123 5670', 'james.jpg')
            `;
            db.run(insertDoctors);

            const insertUsers = `INSERT INTO users (email, password, first_name,
                last_name, height, doctor_id) 
                VALUES 
                    ('patient@gmail.com', 'password', 'John', 'Smith', 170, 1)`;
            db.run(insertUsers);
            // console.log("insert users done")

            const insertAppointments = `INSERT INTO appointments (date, user_id,
                doctor_id) 
                VALUES 
                    ('2022-10-17 13:00:00.000', '1', '1'),
                    ('2022-10-19 14:00:00.000', '1', '2')
                    
            `;
            db.run(insertAppointments);

            const insertPrescriptions = `INSERT INTO prescriptions (medication,
                time, instructions, user_id, doctor_id) 
                VALUES 
                    ('Lexapro', '2022-10-14 10:00:00.000', '10mg once daily', '1', '1'),
                    ('Amoxicillin', '2022-10-14 09:00:00.000', '500mg thrice daily', '1', '1'),
                    ('Amoxicillin', '2022-10-14 15:00:00.000', '500mg thrice daily', '1', '1'),
                    ('Amoxicillin', '2022-10-14 21:00:00.000', '500mg thrice daily', '1', '1')
                    
            `;
            db.run(insertPrescriptions);

            const insertCholesterol = `INSERT INTO cholesterol (level,
                date, user_id) 
                VALUES 
                    ('3.4', '2022-10-01 10:00:00.000', '1'),
                    ('3.4', '2022-10-02 09:00:00.000', '1'),
                    ('3.6', '2022-10-04 15:00:00.000', '1'),
                    ('3.6', '2022-10-05 10:00:00.000', '1'),
                    ('3.4', '2022-10-06 09:00:00.000', '1'),
                    ('4.2', '2022-10-07 15:00:00.000', '1'),
                    ('4.0', '2022-10-08 10:00:00.000', '1'),
                    ('4.4', '2022-10-11 09:00:00.000', '1'),
                    ('5.6', '2022-10-13 15:00:00.000', '1'),
                    ('6.0', '2022-10-15 21:00:00.000', '1')
                    
            `;
            db.run(insertCholesterol);

            const insertBloodPressure = `INSERT INTO blood_pressure (systolic,
                diastolic, date, user_id) 
                VALUES 
                    ('121', '62',  '2022-10-01 10:00:00.000', '1'),
                    ('125', '72', '2022-10-02 09:00:00.000', '1'),
                    ('113', '64', '2022-10-04 15:00:00.000', '1'),
                    ('102', '58', '2022-10-05 10:00:00.000', '1'),
                    ('130', '70', '2022-10-06 09:00:00.000', '1'),
                    ('135', '72', '2022-10-07 15:00:00.000', '1'),
                    ('139', '75', '2022-10-08 10:00:00.000', '1'),
                    ('132', '72', '2022-10-11 09:00:00.000', '1'),
                    ('142', '80', '2022-10-13 15:00:00.000', '1'),
                    ('141', '79', '2022-10-15 21:00:00.000', '1')
                    
            `;
            db.run(insertBloodPressure);

            const insertBloodSugar = `INSERT INTO blood_sugar (level,
                date, user_id) 
                VALUES 
                    ('50', '2022-10-01 10:00:00.000', '1'),
                    ('60', '2022-10-02 09:00:00.000', '1'),
                    ('55', '2022-10-04 15:00:00.000', '1'),
                    ('57', '2022-10-05 10:00:00.000', '1'),
                    ('55', '2022-10-06 09:00:00.000', '1'),
                    ('62', '2022-10-07 15:00:00.000', '1'),
                    ('60', '2022-10-08 10:00:00.000', '1'),
                    ('66', '2022-10-11 09:00:00.000', '1'),
                    ('57', '2022-10-13 15:00:00.000', '1'),
                    ('55', '2022-10-15 21:00:00.000', '1')
                    
            `;
            db.run(insertBloodSugar);

            const insertWeight = `INSERT INTO weight (level,
                date, user_id) 
                VALUES 
                    ('70.2', '2022-10-01 10:00:00.000', '1'),
                    ('71.2', '2022-10-02 09:00:00.000', '1'),
                    ('69.0', '2022-10-04 15:00:00.000', '1'),
                    ('69.2', '2022-10-05 10:00:00.000', '1'),
                    ('72.1', '2022-10-06 09:00:00.000', '1'),
                    ('70.7', '2022-10-07 15:00:00.000', '1'),
                    ('69.9', '2022-10-08 10:00:00.000', '1'),
                    ('72.2', '2022-10-11 09:00:00.000', '1'),
                    ('72.6', '2022-10-13 15:00:00.000', '1'),
                    ('72.9', '2022-10-15 21:00:00.000', '1')
                    
            `;
            db.run(insertWeight);

            
        })
    }

    static all(stmt: string, params: string[]) {
        return new Promise((res, rej) => {
            db.all(stmt, params, (error: Error|null, result: any) => {
                if (error) {
                    return rej(error.message);
                }
                return res(result);
            });
        })
    }

    static get(stmt: string, params: string[]) {
        return new Promise((res, rej) => {
            db.get(stmt, params, (error: Error|null, result: any) => {
                if (error) {
                    return rej(error.message);
                }
                return res(result);
            });
        })
    }

    static run(stmt: string, params: string[]) {
        return new Promise((res, rej) => {
            db.run(stmt, params, (error: Error|null, result: any) => {
                if (error) {
                    return rej(error.message);
                }
                return res(result);
            });
        })
    }
}