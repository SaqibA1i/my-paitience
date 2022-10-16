import styled from "styled-components";
import { HBox } from "../../styledComponents/HBox";
import temp from "../../icons/peter.jpg";
import { Box } from "../../styledComponents/Box";
import { H1, H3, H4 } from "../../styledComponents/Text";
import { VBox } from "../../styledComponents/VBox";
import { SettingsIcon } from "../../icons/Icons";

const StyledBox = styled(HBox)`
  gap: 25px;
  position: fixed;
  top: 10px;
  left: 0;
  justify-content: space-between;
  padding: 10px 200px 100px 20px;
  width: 90vw;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const Navbar = () => {
  return (
    <StyledBox>
      <HBox>
        <Img src={temp} />
        <VBox style={{ alignItems: "start" }}>
          <H4 style={{ fontWeight: 100 }}>Welcome,</H4>
          <H3>Saqib, Ali</H3>
        </VBox>
      </HBox>
      <SettingsIcon />
    </StyledBox>
  );
};

export default Navbar;
