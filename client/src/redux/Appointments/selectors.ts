import { AppState } from "../../wrappers/ReduxWrapper";

export const getAppointmentData = (state: AppState) => {
    return state.appointments;
}
