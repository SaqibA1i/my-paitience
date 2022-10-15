import Controller from '../controllers/controller';
import * as express from 'express';
const router = express.Router()

router.get("/home", Controller.getHomebyUserID);
router.get("/appt", Controller.getAppointmentbyUserID);
router.post("/appt/add", Controller.addAppointment);


export default router;