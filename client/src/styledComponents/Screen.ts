import styled from "styled-components";
import { Box } from "./Box";
import { VBox } from "./VBox";

export const Screen = styled(VBox)`
    height: 90vh;
    min-width: 90vw;
    align-items: baseline;
    justify-content: start;
    padding: 0 5vw;
    padding-top: 10vh;
    gap: 20px;
`;
