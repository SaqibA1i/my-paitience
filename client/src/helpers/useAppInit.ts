import { useEffect } from 'react';
import { APPOINTMENT, Appointment } from '../redux/Appointments';
import { useDispatch } from "react-redux"
import { Doctor, OTHER_DATA, Perscriptions } from '../redux/OtherData';
const useAppInit = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(process.env.REACT_APP_SERVER + "/appt?user_id=1")
            .then((res) => res.json())
            .then(data => {
                const appointments: Appointment[] = data.appointments as Appointment[];
                dispatch(APPOINTMENT.updateAppointments(appointments));
            })

        fetch(process.env.REACT_APP_SERVER + "/prescriptions?user_id=1")
            .then((res) => res.json())
            .then(data => {
                const Perscriptions: Perscriptions[] = data.prescriptions as Perscriptions[];
                dispatch(OTHER_DATA.updatePerscriptions(Perscriptions));
            })

        fetch(process.env.REACT_APP_SERVER + "/getDoctors?user_id=1")
            .then((res) => res.json())
            .then(data => {
                const doctors: Doctor[] = data.appointments as Appointment[];
                dispatch(OTHER_DATA.updateDoctors(doctors));
            })
    }, [])
}

export default useAppInit;
