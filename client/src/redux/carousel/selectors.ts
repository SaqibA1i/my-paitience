import { AppState } from "../../wrappers/ReduxWrapper";

export const getCarouselData = (state: AppState) => {
    return state.carousel;
}
