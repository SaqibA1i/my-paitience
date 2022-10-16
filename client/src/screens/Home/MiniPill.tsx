import styled from "styled-components";
import { ArrowRight } from "../../icons/Icons";
import { HBox } from "../../styledComponents/HBox";
import { H4 } from "../../styledComponents/Text";

type Props = {
  Icon: any;
  name: string;
  color: string;
};
const StyledBox = styled(HBox)`
  align-self: stretch;
  border-radius: 20px;
  width: 150px;
  height: 30px;
  justify-content: space-around;
`;
const MiniPill = ({ Icon, name, color }: Props) => {
  return (
    <StyledBox style={{ background: color }}>
      {Icon}
      <H4 style={{ color: "white", fontSize: "12px", fontWeight: 500 }}>
        {name}
      </H4>
      <ArrowRight />
    </StyledBox>
  );
};

export default MiniPill;
