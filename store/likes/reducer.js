import { likeActionTypes } from "./action";

import { showToast, saveToLocalStorage } from "../../utils/helpers";

const initialState = {
  data: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case likeActionTypes.SET:
      return {
        ...state,
        data: action.payload,
      };

    case likeActionTypes.LIKE:
      const isAlreadyLiked =
        state.data.filter(
          (like) => like.product_id === action.payload.product_id
        ).length !== 0;

      if (isAlreadyLiked) {
        showToast("Product already liked", "error");
        return state;
      }

      let newData = [...state.data, action.payload];

      // Local storage save
      saveToLocalStorage("likes", newData);

      showToast("Liked!", "success");
      return {
        ...state,
        data: newData,
      };
    case likeActionTypes.DISLIKE:
      newData = state.data.filter(
        (product) => product.product_id !== action.payload.product_id
      );

      showToast("Success!", "success");
      // Local storage save
      saveToLocalStorage("likes", newData);
      return {
        ...state,
        data: newData,
      };
    default:
      return state;
  }
}
