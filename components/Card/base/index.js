/* eslint-disable @next/next/no-img-element */
import React from "react";

// react-redux
import { useSelector, useDispatch } from "react-redux";
import { showToast } from "../../../utils/helpers";

const Card = ({ product, dispatch, isLiked }) => {
  const cart = useSelector((state) => state.cart);

  const findProductAmount = () => {
    try {
      return cart.data.filter(
        (item) => item.product_id === product.product_id
      )[0].amount;
    } catch (e) {
      return 0;
    }
  };

  const addToCart = () => {
    dispatch({
      type: "ADD_CART",
      payload: product,
    });
  };

  const removeFromCart = (payload) => {
    dispatch({
      type: "REMOVE_CART",
      payload: payload,
    });
  };

  const like = () => {
    dispatch({
      type: "LIKE",
      payload: product,
    });
  };

  const dislike = () => {
    dispatch({
      type: "DISLIKE",
      payload: product,
    });
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-lg w-64">
      {product && (
        <React.Fragment>
          <img
            className="rounded-t-lg w-full"
            src={product?.images[0].src}
            alt={product?.images[0].alt}
          />
          <div className="p-5">
            <p className="text-md font-bold">{product.name}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Price : {product.price} {product.currency.symbol}
            </p>
          </div>
          <div className="flex w-full mx-5 space-x-4 mb-10">
            <div
              className={`px-2 py-1 rounded-xl ${
                isLiked == true
                  ? " bg-red-500 text-white"
                  : " border border-red-500 text-red-500"
              }
          cursor-pointer`}
              onClick={isLiked ? dislike : like}
            >
              <span className="font-semibold text-sm poppins m-0">
                {isLiked == true ? "Liked" : "Like"}
              </span>
            </div>
            <div
              className={`px-2 py-1 bg-red-500 rounded-xl cursor-pointer ${
                product.stock_qty == 0
                  ? "bg-gray-200 text-gray-500 opacity-50"
                  : product.stock_qty - findProductAmount() > 0
                  ? ""
                  : "bg-gray-200 text-gray-500 opacity-50"
              }`}
              onClick={
                product.stock_qty == 0
                  ? () => {}
                  : product.stock_qty - findProductAmount() > 0
                  ? addToCart
                  : () => showToast("Out of Stock")
              }
            >
              <span className=" text-white font-semibold text-sm poppins">
                Add
              </span>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Card;
