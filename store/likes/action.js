export const likeActionTypes = {
  LIKE: "LIKE",
  DISLIKE: "DISLIKE",
  SET: "SET_LIKES",
};

export const likeProduct = (product) => {
  return {
    type: likeActionTypes.LIKE,
    payload: product,
  };
};

export const dislikeProduct = (product) => {
  return {
    type: likeActionTypes.DISLIKE,
    payload: product,
  };
};

export const setProducts = (products) => {
  return {
    type: likeActionTypes.SET,
    payload: products,
  };
};
