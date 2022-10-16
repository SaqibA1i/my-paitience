import styled from "styled-components";
import { VBox } from "../../styledComponents/VBox";
import { useDispatch } from "react-redux";
import { CAROUSEL } from "../../redux/carousel";

type Props = {
  name: string;
  Icon: any;
  screenIdx: number;
};

const Img = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const P = styled.p`
  font-size: 11px;
`;

const A = styled.a`
  text-decoration: none;
  color: #333;
  text-align: center;
`;

const NavButton = ({ name, Icon, screenIdx }: Props) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(CAROUSEL.updateScreen(screenIdx));
  };

  return (
    <A onClick={handleClick} href={"#" + screenIdx}>
      {Icon}
      <P>{name}</P>
    </A>
  );
};

export default NavButton;
