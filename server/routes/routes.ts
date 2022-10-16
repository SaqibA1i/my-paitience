import Controller from '../controllers/controller';
import appointmentController from '../controllers/appointment.controller';
import * as express from 'express';
const router = express.Router();

router.get("/home", Controller.getHomebyUserID);
// Appointment routes
router.get("/appt", appointmentController.getAppointmentbyUserID);
router.post("/appt/add", appointmentController.addAppointment);
router.get("/getDoctors", appointmentController.getDoctorsFromAppts);
// Prescription routes
router.get("/prescriptions", Controller.getPrescriptionbyUserID);
// Montitoring Routes
router.get("/monitoring", Controller.getMonitoringbyUserID);


export default router;