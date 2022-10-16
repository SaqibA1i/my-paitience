import styled from "styled-components";
import { Appointment } from "../../redux/Appointments";
import { H4 } from "../../styledComponents/Text";
import { VBox } from "../../styledComponents/VBox";

const StyledVBox = styled(VBox)`
  background-color: #38ba9b;
  align-items: start;
  border-radius: 20px;
  padding: 10px 20px;
  gap: 5px;
`;

const AppointmentPill = ({ appointment }: { appointment: Appointment }) => {
  return (
    <StyledVBox>
      <H4 style={{ color: "#156350" }}>{appointment.time} AM</H4>
      <H4 style={{ color: "white", fontWeight: 500, fontSize: "17px" }}>
        Meeting with {appointment.name}
      </H4>
      <H4
        style={{
          textDecoration: "none",
          borderBottom: "1.5px solid white",
          color: "white",
          paddingBottom: "0px",
          fontWeight: "100",
        }}
      >
        Join Call
      </H4>
    </StyledVBox>
  );
};

export default AppointmentPill;
