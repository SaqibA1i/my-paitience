import Controller from '../controllers/controller';
import * as express from 'express';
const router = express.Router();

router.get("/home", Controller.getHomebyUserID);
router.get("/appt", Controller.getAppointmentbyUserID);
router.post("/appt/add", Controller.addAppointment);
router.get("/getDoctors", Controller.getDoctorsFromAppts);
router.get("/prescriptions", Controller.getPrescriptionbyUserID);
router.get("/monitoring", Controller.getMonitoringbyUserID);


export default router;