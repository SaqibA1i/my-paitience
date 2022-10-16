import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum SCREEN_TYPE {
    HOME = "Home",
    APOINTMENTS = "Appointments",
    PERSCRIPTIONS = "Perscriptions",
    MY_HEALTH = "My Health"
};

export enum SCREEN_INDEX {
    APOINTMENTS = 1,
    HOME = 2,
    PERSCRIPTIONS = 3,
    MY_HEALTH = 4
};
export type CarouselType = {
    screen: SCREEN_INDEX
};


export const carousel = createSlice({
    name: "CAROUSEL",
    initialState: { screen: SCREEN_INDEX.APOINTMENTS } as CarouselType,
    reducers: {
        updateScreen: (state, action: PayloadAction<SCREEN_INDEX>) => {
            const { payload: screen } = action;
            Object.assign(state, { screen });
        },
    }
})

export const CAROUSEL = carousel.actions;
