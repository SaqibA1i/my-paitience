import styled from "styled-components";
import { Doctor } from "../../redux/OtherData";
import { VBox } from "../../styledComponents/VBox";
import peter from "../../icons/peter.jpg";
import jane from "../../icons/jane.jpg";
import { HBox } from "../../styledComponents/HBox";

const Pill = ({ doctor, colors }: { doctor: Doctor; colors?: any }) => {
  const StyledVBox = styled(VBox)`
    align-items: start;
    gap: 5px;
    margin-left: 20px;
    p {
      font-weight: 700;
      margin: 0;
    }
    a {
      font-size: 10px;
      text-decoration: underline;
    }
  `;

  const StyledImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 0;
  `;

  const StyledHBox = styled(HBox)`
    background-color: #feeee5;
    border-left: 12px solid #ff9e2a;
    border-radius: 15px;
    padding: 10px 5px 10px 5px;
    min-width: 190px;
    align-items: space-between;
    justify-content: start;
    gap: 15px;
  `;

  return (
    <StyledHBox>
      <StyledVBox>
        <p>Medical Professional: {doctor.name}</p>
        <p style={{ fontSize: "13px", fontWeight: 400 }}>
          Pearson Apple Clinic
        </p>
        <a
          style={{
            borderBottom: "1px solid black",
            textDecoration: "none",
            paddingBottom: "0px",
          }}
        >
          View Doctor Profile
        </a>
      </StyledVBox>
    </StyledHBox>
  );
};

export default Pill;
