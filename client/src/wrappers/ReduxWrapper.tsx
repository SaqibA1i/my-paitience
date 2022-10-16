import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { Appointment, appointments } from "../redux/Appointments";
import { carousel, CarouselType } from "../redux/carousel";
import { Other, otherData } from "../redux/OtherData";

type Props = {
  children: JSX.Element;
};

export type AppState = {
  carousel: CarouselType;
  appointments: Appointment[];
  otherData: Other;
};

export const ReduxWrapper = ({ children }: Props) => {
  const store = configureStore({
    reducer: {
      carousel: carousel.reducer,
      appointments: appointments.reducer,
      otherData: otherData.reducer,
    },
  });
  return <Provider store={store}>{children}</Provider>;
};
