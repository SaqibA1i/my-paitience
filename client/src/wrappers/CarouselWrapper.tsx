import styled from "styled-components";
import { getCarouselData } from "../redux/carousel/selectors";
import { Box } from "../styledComponents/Box";
import { HBox } from "../styledComponents/HBox";

import { useSelector } from "react-redux";

type Props = {
  children: JSX.Element[];
};

const StyledHBox = styled(Box)`
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  position: relative;
  scroll-snap-type: x mandatory;

  scroll-snap-align: center;
  scroll-behavior: smooth;
`;

const CarouselWrapper = ({ children }: Props) => {
  const { screen } = useSelector(getCarouselData);

  return (
    <StyledHBox>
      {children.map((child) => {
        return child;
      })}
    </StyledHBox>
  );
};

export default CarouselWrapper;
