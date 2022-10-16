import styled from "styled-components";
import { Box } from "../../styledComponents/Box";
import { H3, H4 } from "../../styledComponents/Text";
import { VBox } from "../../styledComponents/VBox";
import { useDispatch, useSelector } from "react-redux";
import { otherData, OTHER_DATA } from "../../redux/OtherData";
import { getOtherData } from "../../redux/OtherData/selectors";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { HBox } from "../../styledComponents/HBox";
import { APPOINTMENT, Appointment } from "../../redux/Appointments";

const StyledBox = styled(Box)`
  min-width: 100vw;
  min-height: 100vh;
  position: fixed;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.31);
  backdrop-filter: blur(2px);
  justify-content: center;
  align-items: start;
  display: flex;
`;
const StyledVBox = styled(VBox)`
  background: white;
  width: 80vw;
  margin-top: 20vh;
  gap: 20px;
  border-radius: 30px;
  padding: 20px 10px;
`;

const SubmitButton = styled.button`
  background-color: #ff9e2a;
  color: white;
  border-radius: 15px;
  border: none;
  font-size: 15px;
  padding: 10px 20px;
`;
const CancelButton = styled.button`
  background-color: #ffdeb6;
  color: #ff9e2a;
  border-radius: 15px;
  border: none;
  font-size: 15px;
  padding: 10px 20px;
`;

const Close = styled.button`
  background-color: #011627;
  color: white;
  border-radius: 15px;
  border: none;
  font-size: 15px;
  padding: 10px 20px;
`;
const Modal = () => {
  const dispatch = useDispatch();
  const { modalShown } = useSelector(getOtherData);
  const [success, setSuccess] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      {modalShown && (
        <StyledBox>
          <StyledVBox>
            {!success ? (
              <>
                <H3>Add Appointment</H3>
                <select name="cars" id="cars" style={{ width: "170px" }}>
                  <optgroup label="Your Family doctor">
                    <option value="volvo">Dr. Jane Doe</option>
                  </optgroup>
                  <optgroup label="Assigned Specialists">
                    <option value="mercedes">Peter Wong</option>
                  </optgroup>
                </select>
                <HBox style={{ width: "150px", marginLeft: "-19px" }}>
                  <DatePicker
                    selected={startDate}
                    onChange={(date: Date) => setStartDate(date)}
                  />
                </HBox>
                <select name="cars" id="cars" style={{ width: "170px" }}>
                  <optgroup label="Available Times for Peter Wong">
                    <option value="volvo">9:00 AM</option>
                    <option value="volvo">1:00 PM</option>
                    <option value="volvo">4:00 PM</option>
                  </optgroup>
                </select>
                <HBox>
                  <CancelButton
                    onClick={() => {
                      dispatch(OTHER_DATA.close());
                    }}
                  >
                    Cancel
                  </CancelButton>
                  <SubmitButton
                    onClick={() => {
                      fetch(process.env.REACT_APP_SERVER + "appt/add", {
                        method: "POST", // or 'PUT'
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          date: "2022-10-16 16:00:00.000",
                          user_id: 1,
                          doctor_id: 1,
                        }),
                      })
                        .then((response) => {
                          setSuccess(true);
                          fetch(
                            process.env.REACT_APP_SERVER + "/appt?user_id=1"
                          )
                            .then((res) => res.json())
                            .then((data) => {
                              const appointments: Appointment[] =
                                data.appointments as Appointment[];
                              dispatch(
                                APPOINTMENT.updateAppointments(appointments)
                              );
                            });
                        })
                        .then((data) => {
                          console.log("Success:", data);
                        });
                    }}
                  >
                    Submit
                  </SubmitButton>
                </HBox>
              </>
            ) : (
              <>
                <H3>Request Sent</H3>
                <svg
                  width="84"
                  height="83"
                  viewBox="0 0 84 83"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.6"
                    d="M19.8571 0V27.5862M64.1429 0V27.5862M17.0893 41.3793H33.6964M66.9107 41.3793H50.3036M17.0893 57.931H33.6964M50.3036 57.931H66.9107M8.78571 13.7931H75.2143C76.6824 13.7931 78.0905 14.3744 79.1286 15.4091C80.1668 16.4437 80.75 17.8471 80.75 19.3103V74.4828C80.75 75.946 80.1668 77.3494 79.1286 78.384C78.0905 79.4187 76.6824 80 75.2143 80H8.78571C7.31755 80 5.90952 79.4187 4.87137 78.384C3.83323 77.3494 3.25 75.946 3.25 74.4828V19.3103C3.25 17.8471 3.83323 16.4437 4.87137 15.4091C5.90952 14.3744 7.31755 13.7931 8.78571 13.7931Z"
                    stroke="#38BA9B"
                    stroke-width="6"
                  />
                </svg>
                <H3>Dr. Jane Doe</H3>
                <H4 style={{ fontWeight: 300 }}>16/10/2032 - 4:00PM</H4>
                <Close
                  onClick={() => {
                    dispatch(OTHER_DATA.close());
                  }}
                >
                  Close
                </Close>
              </>
            )}
          </StyledVBox>
        </StyledBox>
      )}
    </>
  );
};

export default Modal;
