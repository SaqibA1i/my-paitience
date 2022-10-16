import useAppInit from "../../helpers/useAppInit";
import { Screen } from "../../styledComponents/Screen";
import { H3, H4 } from "../../styledComponents/Text";
import AppointmentPill from "../Appointments/AppointmentPill";
import DoctorPill from "../Appointments/DoctorPill";
import { useSelector } from "react-redux";
import { getOtherData } from "../../redux/OtherData/selectors";
import Pill from "./Pill";
import { HBox } from "../../styledComponents/HBox";
import SmallPill from "./SmallPill";
import {
  DownGood,
  MeetingIcon,
  MiniMed,
  Neutral,
  SettingsIcon,
  UpBad,
} from "../../icons/Icons";
import styled from "styled-components";
import { VBox } from "../../styledComponents/VBox";
import Row from "./Row";
import MiniPill from "./MiniPill";
import { Perscriptions } from "../../redux/OtherData";
import { getAppointmentData } from "../../redux/Appointments/selectors";
import { Appointment } from "../../redux/Appointments";

const StyledHBox = styled(HBox)`
  width: 92vw;
  overflow-x: scroll;
  padding: 15px 0;
  justify-content: start;
`;

const StyledVBox = styled(VBox)`
  max-height: 46vh;
  overflow-y: scroll;
  place-content: flex-start;
`;
const Times = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
  "08:00 PM",
  "09:00 PM",
  "10:00 PM",
  "11:00 PM",
  "12:00 AM",
];

const Pers = ({ name }: { name: string }) => (
  <MiniPill name={name} Icon={<MiniMed />} color="#AC8AD2" />
);

const Appt = ({ name }: { name: string }) => (
  <MiniPill name={name} Icon={<MeetingIcon />} color="#38BA9B" />
);

const greaterThan = (a: string, b: string) => {
  let timeA: number = parseInt(a.split(":")[0]);
  let timeB: number = parseInt(b.split(":")[0]);
  if (a.includes("PM")) {
    timeA += 12;
  }
  if (b.includes("PM")) {
    timeA += 12;
  }
  return timeA <= timeB;
};

const Home = () => {
  useAppInit();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();
  const { perscriptions = [] } = useSelector(getOtherData);
  console.log(perscriptions);
  const appointments = useSelector(getAppointmentData) || [];
  return (
    <Screen id="2" style={{ alignItems: "stretch" }}>
      <Pill
        doctor={{
          name: "Jane Doe",
          phone: "(647) 123 5678",
        }}
        colors={["#FEF8F4", "#FF9E2A"]}
      />
      <StyledHBox>
        <SmallPill Icon={<DownGood />} name="Cholesterol" />
        <SmallPill Icon={<UpBad />} name="High Blood Pressure" />
        <SmallPill Icon={<Neutral />} name="Blood Sugar" />
      </StyledHBox>
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
      <StyledVBox>
        {Times.map((time) => {
          let res = undefined;
          let pills: any[] = [];
          perscriptions.map((pers: Perscriptions) => {
            console.log(pers.time, time, pers.time.includes(time));
            if (pers.time.includes(time)) {
              pills.push(<Pers name={pers.medication} />);
            }
          });
          appointments.forEach((appt: Appointment) => {
            if (appt.time == time) {
              pills.push(<Appt name={appt.name} />);
            }
          });
          return <Row time={time} isCurr={time === "01:00 PM"} Pill={pills} />;
        })}
      </StyledVBox>
    </Screen>
  );
};

export default Home;
