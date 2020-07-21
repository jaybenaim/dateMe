import { SET_IMAGES } from "../actions/types";

const initialState = {
  imageUrls: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_IMAGES:
      return {
        ...state,
        imageUrls: Object.assign([], action.payload),
      };

    default:
      return state;
  }
}
