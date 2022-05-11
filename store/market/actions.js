export const marketActionTypes = {
  GET_PRODUCTS: "GET_PRODUCTS",
  SELL_PRODUCTS: "SELL_PRODUCTS",
  UPDATE_STOCK: "UPDATE_STOCK",
};

export const getProducts = () => {
  return {
    type: marketActionTypes.GET_PRODUCTS,
  };
};

export const sellProduct = (products) => {
  return {
    type: marketActionTypes.SELL_PRODUCTS,
    payload: products,
  };
};

export const updateStock = (products) => {
  return {
    type: marketActionTypes.UPDATE_STOCK,
    payload: products,
  };
};
