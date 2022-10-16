import styled from "styled-components";
import { Perscriptions } from "../../redux/OtherData";
import { Box } from "../../styledComponents/Box";
import { H4 } from "../../styledComponents/Text";
import { VBox } from "../../styledComponents/VBox";

const StyledBox = styled(VBox)`
  background-color: #c48ad2;
  color: white;
  align-items: start;
  padding: 10px 20px;
  border-radius: 30px;
  gap: 10px;
`;

const BoxPill = styled(Box)`
  border-radius: 20px;
  border: 2px solid white;
  padding: 2px 9px;
`;
const PerscriptionPill = ({
  perscription,
}: {
  perscription: Perscriptions;
}) => {
  return (
    <StyledBox>
      <H4 style={{ color: "white", fontWeight: 400, fontSize: "17px" }}>
        {perscription.medication}
      </H4>
      <BoxPill>{perscription.instructions}</BoxPill>
      {/* <Box>{perscription.time[0]}</Box> */}
      <H4 style={{ color: "#40295A", fontWeight: 100 }}>
        Issued by Dr. {perscription.doctor_name}
      </H4>
    </StyledBox>
  );
};

export default PerscriptionPill;
