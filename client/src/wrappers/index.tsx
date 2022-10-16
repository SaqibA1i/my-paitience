import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ReduxWrapper } from "./ReduxWrapper";

type Props = {
  children: JSX.Element[];
};

const Wrappers = ({ children }: Props) => {
  return (
    <ReduxWrapper>
      <BrowserRouter>{children}</BrowserRouter>
    </ReduxWrapper>
  );
};

export default Wrappers;
