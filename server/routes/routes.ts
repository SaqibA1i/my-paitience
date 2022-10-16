import homeController from '../controllers/home.controller';
import appointmentController from '../controllers/appointment.controller';
import prescriptionController from '../controllers/prescription.controller';
import monitoringController from '../controllers/monitoring.controller';
import * as express from 'express';


const router = express.Router();

//Main Routes
router.get("/home", homeController.getDoctorbyUserID);

// Appointment routes
router.get("/appt", appointmentController.getAppointmentbyUserID);
router.post("/appt/add", appointmentController.addAppointment);
router.post("/appt/delete", appointmentController.deleteAppointment);
router.get("/getDoctors", appointmentController.getDoctorsFromAppts);

// Prescription routes
router.get("/prescriptions", prescriptionController.getPrescriptionbyUserID);
router.post("/prescriptions/add", prescriptionController.addPrescription);
router.post("/prescriptions/delete", prescriptionController.deletePrescription);

// Montitoring Routes
router.get("/monitoring", monitoringController.getMonitoringbyUserID);


export default router;