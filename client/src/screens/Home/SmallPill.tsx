import styled from "styled-components";
import { HBox } from "../../styledComponents/HBox";
import { H4 } from "../../styledComponents/Text";
type Props = {
  Icon: any;
  name: string;
};

const StyledHBox = styled(HBox)`
  border: 1px solid #409bb7;
  border-radius: 20px;
  width: fit-content;
  white-space: nowrap;
  padding: 5px 10px;
`;

const SmallPill = ({ Icon, name }: Props) => {
  return (
    <StyledHBox>
      {Icon}
      <H4>{name}</H4>
    </StyledHBox>
  );
};

export default SmallPill;
