import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Appointment = {
    date: string,
    img_src: string,
    name: string,
    phone: string,
    time: string
}

export const appointments = createSlice({
    name: "APPOINTMENTS",
    initialState: [] as Appointment[],
    reducers: {
        updateAppointments: (state, action: PayloadAction<Appointment[]>) => {
            const { payload: appointments } = action;
            Object.assign(state, appointments);
        },
    }
})

export const APPOINTMENT = appointments.actions;
