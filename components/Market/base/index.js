import React from "react";

// CSS
import styles from "./style.module.css";

// react-redux
import { useSelector, useDispatch } from "react-redux";

// Components
import { Card } from "../../Card";

const MarketBase = () => {
  const dispatch = useDispatch();
  const market = useSelector((state) => state.market);
  const cart = useSelector((state) => state.cart);
  const likes = useSelector((state) => state.likes);

  return (
    <div className="w-max md:pl-3 mx-auto">
      <p className="font-semibold text-3xl pt-10 tracking-wider poppins mb-4">
        Products
      </p>

      <div className="grid grid-cols-1 space-y-10 md:space-y-0 md:grid-cols-3 md:gap-8">
        {market.data &&
          market.data.length !== 0 &&
          market.data.map((product) => {
            return (
              <Card
                key={product.product_id}
                product={product}
                dispatch={dispatch}
                isLiked={
                  likes.data?.filter(
                    (like) => like.product_id === product.product_id
                  ).length !== 0
                }
                inCart={
                  cart.data?.filter(
                    (item) => item.product_id === product.product_id
                  ).length !== 0
                }
              />
            );
          })}
      </div>
    </div>
  );
};

export default MarketBase;
