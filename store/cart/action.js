export const cartActionTypes = {
  ADD: "ADD_CART",
  REMOVE: "REMOVE_CART",
  SET: "SET_CART",
  CLEAR: "CLEAR_CART",
};

export const addToCart = (product) => {
  return {
    type: cartActionTypes.ADD,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: cartActionTypes.REMOVE,
    payload: product,
  };
};

export const setCart = (product) => {
  return {
    type: cartActionTypes.SET,
    payload: product,
  };
};

export const clearCart = () => {
  return {
    type: cartActionTypes.CLEAR,
  };
};
