import styled from "styled-components";
import { HBox } from "../../styledComponents/HBox";
import NavButton from "./NavButton";
import temp from "../../icons/temp.png";
import { CAROUSEL, SCREEN_INDEX } from "../../redux/carousel";
import {
  MyHealthIcon,
  AppointmentIcon,
  HomeIcon,
  PerscriptionsIcon,
} from "../../icons/Icons";
import { useSelector, useDispatch } from "react-redux";
import { getCarouselData } from "../../redux/carousel/selectors";
import { Box } from "../../styledComponents/Box";

const StyledBox = styled(HBox)`
  gap: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  justify-content: space-around;
  width: 100vw;
  background-color: white;
`;
const BottomNavbar = () => {
  const { screen } = useSelector(getCarouselData);
  console.log(screen);

  return (
    <StyledBox>
      <NavButton
        name="Appointments"
        Icon={
          <Box>
            <AppointmentIcon isSel={screen == SCREEN_INDEX.APOINTMENTS} />
          </Box>
        }
        screenIdx={SCREEN_INDEX.APOINTMENTS}
      />
      <NavButton
        name="Home"
        Icon={<HomeIcon isSel={screen == SCREEN_INDEX.HOME} />}
        screenIdx={SCREEN_INDEX.HOME}
      />
      <NavButton
        name="Perscriptions"
        Icon={
          <PerscriptionsIcon isSel={screen == SCREEN_INDEX.PERSCRIPTIONS} />
        }
        screenIdx={SCREEN_INDEX.PERSCRIPTIONS}
      />
      <NavButton
        name="MyHealth"
        Icon={<MyHealthIcon isSel={screen == SCREEN_INDEX.MY_HEALTH} />}
        screenIdx={SCREEN_INDEX.MY_HEALTH}
      />
    </StyledBox>
  );
};
export default BottomNavbar;
