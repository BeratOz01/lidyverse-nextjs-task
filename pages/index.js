// Components
import { Cart, MarketBase } from "../components";

// react-toastify
import React from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  return (
    <div className="lg:flex">
      <div className="h-max lg:w-9/12">
        <MarketBase />
      </div>
      <div className="lg:h-screen lg:w-3/12 lg:fixed lg:right-0 lg:shadow-xl lg:overflow-y-scroll">
        <Cart />
      </div>
    </div>
  );
}
