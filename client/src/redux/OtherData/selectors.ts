import { AppState } from "../../wrappers/ReduxWrapper";

export const getOtherData = (state: AppState) => {
    return state.otherData;
}
