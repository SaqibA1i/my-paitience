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
import { DownGood, Neutral, SettingsIcon, UpBad } from "../../icons/Icons";
import styled from "styled-components";

const StyledHBox = styled(HBox)`
  width: 92vw;
  overflow-x: scroll;
  padding: 15px 0;
  justify-content: start;
`;
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
  const { doctors } = useSelector(getOtherData);
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
    </Screen>
  );
};

export default Home;
