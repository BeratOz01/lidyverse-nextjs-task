/* eslint-disable @next/next/no-img-element */
import React from "react";

// react-redux
import { useSelector, useDispatch } from "react-redux";

// react-router-dom
import { useRouter } from "next/router";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const router = useRouter();

  const [totalPrice, setTotalPrice] = React.useState(0);

  // useEffect function for calculate total price
  React.useEffect(() => {
    const calculatePrice = () => {
      if (cart?.data) {
        let total = 0;
        cart.data.map((product) => {
          total += product.special_price * product.amount;
        });
        setTotalPrice(total);
      }
    };

    if (cart.length === 0) setTotalPrice(0);
    else calculatePrice();
  }, [cart]);

  return (
    <div className="pt-10 my-54 mb-32">
      <p className="text-center tracking-wide poppins text-3xl">Cart</p>
      <div className="grid grid-cols-1 mt-2">
        {cart?.data &&
          cart?.data.length > 0 &&
          cart?.data?.map((product) => {
            return (
              <div
                className="flex flex-col items-center w-52 border border-gray-200 rounded-lg mb-4 bg-white overflow-hidden mx-auto"
                key={product.product_id}
              >
                <span className="ml-auto items-center justify-right px-2 py-1 mt-2 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                  {product.amount}
                </span>
                <img
                  src={product.images[0].src}
                  alt={product.images[0].alt}
                  className="w-full h-full"
                />
                <p className="text-center font-bold text-md">{product.name}</p>
                <p className="text-center font-bold text-md">
                  <span className="line-through">{product.price}</span>
                  <br />
                  <span className="">
                    {product.special_price} {product.currency.symbol}
                  </span>
                </p>
                <div className="my-2">
                  <div
                    className="bg-red-500 px-2 py-1 rounded-lg cursor-pointer"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_CART",
                        payload: product,
                      })
                    }
                  >
                    <p className="poppins text-sm text-white">
                      Remove From Cart
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {cart.data?.length !== 0 && cart?.data && (
        <>
          <p className="text-center poppins mt-5">
            Current Price : {totalPrice} {cart.data[0].currency.symbol}
          </p>
          <div
            className="py-2 px-1 bg-green-500 w-52 mx-auto rounded-sm mt-4 text-center cursor-pointer"
            onClick={() => router.push("/order")}
          >
            <span className="text-white poppins">Buy</span>
          </div>

          {totalPrice < 3000 && cart.data[0]?.currency.symbol ? (
            <p className="text-center mt-6 poppins text-md">
              Shipping Fee : 50 {cart.data[0]?.currency.symbol}
            </p>
          ) : (
            <p className="text-center mt-6 poppins text-green-600">
              Shipping Free!!
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
