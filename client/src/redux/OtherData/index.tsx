import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Doctor = {
  name: string;
  phone: string;
  img_src?: string;
};

export type Other = {
  modalShown: boolean;
  doctors: Doctor[];
};

export const otherData = createSlice({
  name: "OTHER_DATA",
  initialState: { modalShown: false } as Other,
  reducers: {
    show: (state) => {
      Object.assign(state, { modalShown: true });
    },
    close: (state) => {
      Object.assign(state, { modalShown: false });
    },
    updateDoctors: (state, action: PayloadAction<Doctor[]>) => {
      const { payload: doctors } = action;
      Object.assign(state, doctors);
    },
  },
});

export const OTHER_DATA = otherData.actions;
