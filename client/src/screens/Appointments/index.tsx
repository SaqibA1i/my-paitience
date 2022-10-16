import { Screen } from "../../styledComponents/Screen";
import { H1, H3, H4 } from "../../styledComponents/Text";
import { useSelector } from "react-redux";
import { getAppointmentData } from "../../redux/Appointments/selectors";
import { Appointment } from "../../redux/Appointments";
import AppointmentPill from "./AppointmentPill";
import { useDispatch } from "react-redux";
import { Doctor, OTHER_DATA } from "../../redux/OtherData";
import DoctorPill from "./DoctorPill";
import { HBox } from "../../styledComponents/HBox";
import { VBox } from "../../styledComponents/VBox";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 30px;
  border: 3px solid #ff9e2a;
  background: #fff3e4;
  color: #ff9e2a;
  font-size: 25px;
`;

const Appointments = () => {
  const dispatch = useDispatch();
  const date = new Date();
  const appointments: Appointment[] = useSelector(
    getAppointmentData
  ) as Appointment[];

  const doctors: Doctor[] = useSelector(getAppointmentData) as Appointment[];

  const addAppointment = () => {
    dispatch(OTHER_DATA.show());
  };
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <Screen id="1">
      <H3>My Doctors</H3>
      <HBox
        style={{
          gap: "10px",
          overflowX: "scroll",
          maxWidth: "92vw",
          padding: "0px 0 20px 0",
          justifyContent: "flex-start",
        }}
      >
        {doctors.map((doctor: Doctor) => {
          return <DoctorPill doctor={doctor} />;
        })}
      </HBox>
      <H3>My Appointments</H3>
      <H4>
        {days[date.getDay()]} the {date.getDate()}th
      </H4>
      <HBox>
        <H4 style={{ borderBottom: "3px solid #FF9E2A", paddingBottom: "2px" }}>
          Today
        </H4>
        <H4
          style={{
            borderBottom: "3px solid transparent",
            paddingBottom: "2px",
          }}
        >
          Tommorow
        </H4>
      </HBox>
      <VBox
        style={{
          gap: "10px",
          alignItems: "stretch",
          width: "-webkit-fill-available",
        }}
      >
        {appointments.map((appointment: Appointment) => {
          return <AppointmentPill appointment={appointment} />;
        })}
        <StyledButton onClick={addAppointment}>+</StyledButton>
      </VBox>
    </Screen>
  );
};

export default Appointments;
