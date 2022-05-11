import { cartActionTypes } from "./action";

import { showToast, saveToLocalStorage } from "../../utils/helpers";

const initialState = {
  data: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case cartActionTypes.ADD:
      const isInCart = state.data?.filter(
        (item) => item.product_id === action.payload.product_id
      );

      if (isInCart.length !== 0) {
        showToast("Cart!", "success");

        for (let i = 0; i < state.data.length; i++) {
          if (state.data[i].product_id === action.payload.product_id) {
            state.data[i].amount += 1;
          }
        }

        saveToLocalStorage("cart", state.data);
        return {
          ...state,
        };
      }

      showToast("Added to Cart!", "success");

      // Update product amount in cart
      action.payload.amount = 1;
      let newData = [...state.data, action.payload];
      // Local storage save
      saveToLocalStorage("cart", newData);

      return {
        ...state,
        data: newData,
      };
    case cartActionTypes.REMOVE:
      showToast("Removed from Cart!", "success");

      // Update product amount in cart
      if (action.payload.amount === 1) {
        newData = state.data.filter(
          (product) => product.product_id !== action.payload.product_id
        );
        // Local storage save
        saveToLocalStorage("cart", newData);

        return {
          ...state,
          data: newData,
        };
      } else {
        for (let i = 0; i < state.data.length; i++) {
          if (state.data[i].product_id === action.payload.product_id) {
            state.data[i].amount -= 1;
          }
        }
        // Local storage save
        saveToLocalStorage("cart", state.data);

        return {
          ...state,
          data: state.data,
        };
      }

    case cartActionTypes.SET:
      return {
        ...state,
        data: action.payload,
      };

    case cartActionTypes.CLEAR:
      // Local storage save
      saveToLocalStorage("cart", []);
      return {
        ...state,
        data: [],
      };

    default:
      return state;
  }
}
