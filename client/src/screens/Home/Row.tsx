import styled from "styled-components";
import { Box } from "../../styledComponents/Box";
import { HBox } from "../../styledComponents/HBox";
import { H4 } from "../../styledComponents/Text";
import { VBox } from "../../styledComponents/VBox";

type Props = {
  isCurr: boolean;
  time: string;
  Pill: any;
};

const StyledBox = styled(VBox)`
  border-bottom: 2px solid #6f6f6f;
  justify-content: space-between;
  align-self: stretch;
  align-items: start;
  padding: 20px 10px;
`;

const StyledHr = styled(Box)`
  border-bottom: 2px dotted #f0466e;
  min-width: 86vw;
  position: relative;
  border-left: 10px dotted red;
  margin-left: -10px;
  height: 3px;
`;

const StyledHBox = styled(HBox)`
  width: -webkit-fill-available;
  justify-content: space-between;
`;
function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const Row = ({ isCurr, time, Pill }: Props) => {
  return (
    <StyledBox
      style={{
        borderBottomColor: isCurr ? "#F0466E" : "#6f6f6f",
      }}
    >
      <StyledHBox>
        <H4 style={{ color: isCurr ? "#F0466E" : "" }}>{time}</H4>
        <Box
          style={{
            marginRight: randomIntFromInterval(0, 40) + "px",
          }}
        >
          {Pill}
        </Box>
      </StyledHBox>
      {isCurr && <StyledHr />}
    </StyledBox>
  );
};

export default Row;
