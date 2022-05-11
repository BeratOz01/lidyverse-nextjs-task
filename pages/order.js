/* eslint-disable @next/next/no-img-element */
import React from "react";

// react-redux
import { useSelector, useDispatch } from "react-redux";

// next/router
import { useRouter } from "next/router";

// Components - Toast
import { showToast } from "../utils/helpers";

const Summary = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const market = useSelector((state) => state.market);

  const calculateTotalWithDiscount = () => {
    let total = 0;
    cart.data.forEach((product) => {
      total += product.special_price * product.amount;
    });
    return total;
  };

  const calculateTotalWithoutDiscount = () => {
    let total = 0;
    cart.data.forEach((product) => {
      total += product.price * product.amount;
    });
    return total;
  };

  const onClickBuy = () => {
    dispatch({ type: "SELL_PRODUCTS", payload: cart.data });
    dispatch({ type: "CLEAR_CART" });

    showToast("Order Successful!", "success");
    router.push("/");
  };

  return (
    <div className="w-max md:pl-3 mx-auto">
      <p className="font-semibold text-3xl pt-10 tracking-wider poppins mb-4">
        Summary
      </p>
      {cart.data && cart.data.length === 0 && (
        <div>
          <p className="text-center font-bold text-md">
            You don&#39;t have any items in your cart
          </p>
          <div className="pt-5">
            <div
              className="bg-red-500 py-2 px-1 rounded-sm text-center"
              onClick={() => router.push("/")}
            >
              <span className="text-xl poppins text-white cursor-pointer">
                Go Marketplace
              </span>
            </div>
          </div>
        </div>
      )}

      {cart.data && cart.data.length !== 0 && (
        <>
          <div className="grid grid-cols-1 space-y-10 md:space-y-0 md:grid-cols-2 md:gap-8">
            {cart.data.map((product) => {
              return (
                <div
                  key={product.product_id}
                  className="flex shadow-xl h-60 rounded-md overflow-hidden"
                >
                  <img
                    src={product.images[0].src}
                    alt={product.name}
                    className="h-full w-40 my-5"
                  />
                  <div className="mt-5 py-5 text-center m-24">
                    <p className="poppins">{product.name}</p>
                    <p className="poppins">Amount: {product.amount}</p>
                    <p className="poppins text-md text-green-500">
                      Discount: {product.discount_ratio}%
                    </p>
                    <p>
                      Price:{" "}
                      <span className="text-green-500">
                        {product.special_price} {product.currency.symbol}
                      </span>
                      <br />
                      <span className="text-red-500 line-through">
                        {product.price && product.price}
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <p className="font-semibold text-3xl pt-10 tracking-wider poppins mb-4 mr-10">
              Total
            </p>
            <p className="ml-5">
              <span className="text-green-500 poppins tracking-wide">
                With Discount {calculateTotalWithDiscount()}{" "}
                {cart.data[0].currency.symbol}
              </span>
            </p>
            <p className="ml-5 text-red-500">
              Without Discount{" "}
              <span className=" line-through">
                {calculateTotalWithoutDiscount()} {cart.data[0].currency.symbol}
              </span>
            </p>
            <p className="ml-5">
              <span className="text-green-500 ">
                Save{" "}
                {calculateTotalWithoutDiscount() - calculateTotalWithDiscount()}{" "}
                {cart.data[0].currency.symbol}
              </span>
            </p>
            <p className="ml-5">
              {calculateTotalWithDiscount() < 3000 ? (
                <span className="text-green-500 poppins tracking-wide">
                  FREE SHIPPING
                </span>
              ) : (
                <span className="text-red-500">Shipping Fee : 50 TL</span>
              )}
            </p>
            <div
              className="bg-green-500 rounded-sm flex mt-10 cursor-pointer"
              onClick={onClickBuy}
            >
              <p className="text-white poppins mx-auto text-2xl p-4">Buy</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Summary;
