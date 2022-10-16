import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Doctor = {
  name: string;
  phone: string;
  img_src?: string;
};

export type Perscriptions = {
  medication: string;
  time: string[];
  instructions: string;
  doctor_name: string;
};

export type Other = {
  modalShown: boolean;
  doctors: Doctor[];
  perscriptions: Perscriptions[];
};

export const otherData = createSlice({
  name: "OTHER_DATA",
  initialState: { modalShown: false, doctors: [], perscriptions: [] } as Other,
  reducers: {
    show: (state) => {
      Object.assign(state, { modalShown: true });
    },
    close: (state) => {
      Object.assign(state, { modalShown: false });
    },
    updateDoctors: (state, action: PayloadAction<Doctor[]>) => {
      const { payload: doctors } = action;
      Object.assign(state, { doctors: doctors });
    },
    updatePerscriptions: (state, action: PayloadAction<Perscriptions[]>) => {
      const { payload: perscriptions } = action;
      Object.assign(state, { perscriptions: perscriptions });
    },
  },
});

export const OTHER_DATA = otherData.actions;
