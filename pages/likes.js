import React from "react";

// react-redux
import { useSelector, useDispatch } from "react-redux";

// next/router
import { useRouter } from "next/router";

// Components - Card
import { Card } from "../components";

const Likes = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const likes = useSelector((state) => state.likes);

  return (
    <div className="w-max md:pl-3 mx-auto">
      <p className="font-semibold text-3xl pt-10 tracking-wider poppins mb-4">
        Likes
      </p>
      {likes.data && likes.data.length === 0 && (
        <div>
          <p className="text-center font-bold text-md">
            You don&#39;t have any likes yet
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
      {likes.data && likes.data.length !== 0 && (
        <div className="grid grid-cols-1 space-y-10 md:space-y-0 md:grid-cols-3 md:gap-8">
          {likes.data &&
            likes.data.map((product) => {
              return (
                <Card
                  key={product.product_id}
                  product={product}
                  dispatch={dispatch}
                  isLiked={true}
                  inCart={
                    cart.data.filter(
                      (item) => item.product_id === product.product_id
                    ).length !== 0
                  }
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Likes;
