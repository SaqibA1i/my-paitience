import styled from "styled-components";
import { Box } from "../../styledComponents/Box";
import { H3 } from "../../styledComponents/Text";
import { VBox } from "../../styledComponents/VBox";
import { useDispatch, useSelector } from "react-redux";
import { otherData, OTHER_DATA } from "../../redux/OtherData";
import { getOtherData } from "../../redux/OtherData/selectors";

const StyledBox = styled(Box)`
  min-width: 100vw;
  min-height: 100vh;
  position: fixed;
  z-index: 100;
  backdrop-filter: blur(2px);
  justify-content: center;
  align-items: start;
  display: flex;
`;
const StyledVBox = styled(VBox)`
  background: #333;
  width: 80vw;
  margin-top: 20vh;
`;
const Modal = () => {
  const dispatch = useDispatch();
  const { modalShown } = useSelector(getOtherData);

  return (
    <>
      {modalShown && (
        <StyledBox>
          <StyledVBox>
            <H3>Add Appointment</H3>
            <input type="text" placeholder="Time" />
            <input type="text" placeholder="Date" />
            <button
              onClick={() => {
                dispatch(OTHER_DATA.close());
              }}
            >
              Cancel
            </button>
            <button>Submit</button>
          </StyledVBox>
        </StyledBox>
      )}
    </>
  );
};

export default Modal;
