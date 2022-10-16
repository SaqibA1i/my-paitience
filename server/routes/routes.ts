import Controller from '../controllers/controller';
import appointmentController from '../controllers/appointment.controller';
import prescriptionController from '../controllers/prescription.controller';
import * as express from 'express';
const router = express.Router();

//Main Routes
router.get("/home", Controller.getHomebyUserID);

// Appointment routes
router.get("/appt", appointmentController.getAppointmentbyUserID);
router.post("/appt/add", appointmentController.addAppointment);
router.get("/getDoctors", appointmentController.getDoctorsFromAppts);

// Prescription routes
router.get("/prescriptions", prescriptionController.getPrescriptionbyUserID);
router.post("/prescriptions/add", prescriptionController.addPrescription);

// Montitoring Routes
router.get("/monitoring", Controller.getMonitoringbyUserID);


export default router;