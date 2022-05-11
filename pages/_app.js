import "../styles/globals.css";

// Store
import { wrapper } from "../store/store";
import React from "react";
import { Header } from "../components";

import { ToastContainer } from "react-toastify";

// react-toastify CSS
import "react-toastify/dist/ReactToastify.css";

// react-redux
import { useDispatch } from "react-redux";

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const setLikes = (products) => {
      dispatch({
        type: "SET_LIKES",
        payload: products,
      });
    };

    const updateStock = (products) => {
      dispatch({
        type: "UPDATE_STOCK",
        payload: products,
      });
    };

    const setCart = (products) => {
      dispatch({
        type: "SET_CART",
        payload: products,
      });
    };

    let likes = localStorage.getItem("likes");
    likes = JSON.parse(likes);

    let recentSales = localStorage.getItem("recentSales");
    recentSales = JSON.parse(recentSales);

    let products = localStorage.getItem("cart");
    products = JSON.parse(products);

    if (dispatch && products) setCart(products);

    if (dispatch && likes) setLikes(likes);

    if (recentSales?.length !== 0 && recentSales) updateStock(recentSales);
  }, [dispatch]);
  return (
    <React.Fragment>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        draggable
      />
      <Header />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default wrapper.withRedux(MyApp);
