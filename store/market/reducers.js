import { saveToLocalStorage } from "../../utils/helpers";
import { marketActionTypes } from "./actions";

const initialState = {
  data: [
    {
      product_id: "5478458",
      name: "Femme Romance For You II Yüzük",
      parent_id: null,
      sku: "LIDY.LIDYRN3202",
      price: 1800,
      is_favorite: "",
      currency: {
        symbol: "TL",
        pre_defined: false,
      },
      discount_ratio: 30,
      special_price: 1260,
      stock_qty: 2,
      brand: {
        id: "5224",
        name: "LIDY",
        slug: "marka/lidy",
      },
      link: "lidy-sparkles-for-you-ii-yuzuk",
      slug: "lidy-sparkles-for-you-ii-yuzuk",
      images: [
        {
          src: "https://cf3.lidyana.com/pi/r/5478458/480x720/1",
          position: "1",
          alt: "Femme Romance For You II Yüzük",
        },
        {
          src: "https://cf3.lidyana.com/pi/r/5478458/480x720/3",
          position: "3",
          alt: "Femme Romance For You II Yüzük",
        },
        {
          src: "https://cf3.lidyana.com/pi/r/5478458/480x720/4",
          position: "4",
          alt: "Femme Romance For You II Yüzük",
        },
      ],
    },
    {
      product_id: "5478515",
      name: "Femme Romance For You I Bileklik",
      parent_id: null,
      sku: "LIDY.LIDYBR3102",
      price: 550,
      is_favorite: "",
      currency: {
        symbol: "TL",
        pre_defined: false,
      },
      discount_ratio: 30,
      special_price: 385,
      stock_qty: 1041,
      brand: {
        id: "5224",
        name: "LIDY",
        slug: "marka/lidy",
      },
      link: "lidy-sparkles-for-you-i-bileklik",
      slug: "lidy-sparkles-for-you-i-bileklik",
      images: [
        {
          src: "https://cf0.lidyana.com/pi/r/5478515/480x720/1",
          position: "1",
          alt: "Femme Romance For You I Bileklik",
        },
        {
          src: "https://cf0.lidyana.com/pi/r/5478515/480x720/2",
          position: "2",
          alt: "Femme Romance For You I Bileklik",
        },
        {
          src: "https://cf0.lidyana.com/pi/r/5478515/480x720/4",
          position: "4",
          alt: "Femme Romance For You I Bileklik",
        },
        {
          src: "https://cf0.lidyana.com/pi/r/5478515/480x720/5",
          position: "5",
          alt: "Femme Romance For You I Bileklik",
        },
      ],
    },
    {
      product_id: "5478510",
      name: "Color Romance For You II Kolye",
      parent_id: null,
      sku: "LIDY.LIDYNE21013",
      price: 625,
      is_favorite: "",
      currency: {
        symbol: "TL",
        pre_defined: false,
      },
      discount_ratio: 30,
      special_price: 437,
      stock_qty: 1059,
      brand: {
        id: "5224",
        name: "LIDY",
        slug: "marka/lidy",
      },
      link: "lidy-sisters-for-you-i-kolye",
      slug: "lidy-sisters-for-you-i-kolye",
      images: [
        {
          src: "https://cf0.lidyana.com/pi/r/5478510/480x720/1",
          position: "1",
          alt: "Color Romance For You II Kolye",
        },
        {
          src: "https://cf0.lidyana.com/pi/r/5478510/480x720/3",
          position: "3",
          alt: "Color Romance For You II Kolye",
        },
        {
          src: "https://cf0.lidyana.com/pi/r/5478510/480x720/4",
          position: "4",
          alt: "Color Romance For You II Kolye",
        },
      ],
    },
    {
      product_id: "5478513",
      name: "Color Romance For You III Kolye",
      parent_id: null,
      sku: "LIDY.LIDYNE1201",
      price: 750,
      is_favorite: "",
      currency: {
        symbol: "TL",
        pre_defined: false,
      },
      discount_ratio: 30,
      special_price: 525,
      stock_qty: 1068,
      brand: {
        id: "5224",
        name: "LIDY",
        slug: "marka/lidy",
      },
      link: "lidy-giggles-for-you-ii-kolye",
      slug: "lidy-giggles-for-you-ii-kolye",
      images: [
        {
          src: "https://cf3.lidyana.com/pi/r/5478513/480x720/1",
          position: "1",
          alt: "Color Romance For You III Kolye",
        },
        {
          src: "https://cf3.lidyana.com/pi/r/5478513/480x720/3",
          position: "3",
          alt: "Color Romance For You III Kolye",
        },
        {
          src: "https://cf3.lidyana.com/pi/r/5478513/480x720/4",
          position: "4",
          alt: "Color Romance For You III Kolye",
        },
      ],
    },
    {
      product_id: "5478456",
      name: "Femme Romance For You VI Bileklik",
      parent_id: null,
      sku: "LIDY.LIDYBR3402",
      price: 2365,
      is_favorite: "",
      currency: {
        symbol: "TL",
        pre_defined: false,
      },
      discount_ratio: 30,
      special_price: 1655,
      stock_qty: 0,
      brand: {
        id: "5224",
        name: "LIDY",
        slug: "marka/lidy",
      },
      link: "lidy-sparkles-for-you-iv-bileklik",
      slug: "lidy-sparkles-for-you-iv-bileklik",
      images: [
        {
          src: "https://cf1.lidyana.com/pi/r/5478456/480x720/1",
          position: "1",
          alt: "Femme Romance For You VI Bileklik",
        },
        {
          src: "https://cf1.lidyana.com/pi/r/5478456/480x720/2",
          position: "2",
          alt: "Femme Romance For You VI Bileklik",
        },
        {
          src: "https://cf1.lidyana.com/pi/r/5478456/480x720/4",
          position: "4",
          alt: "Femme Romance For You VI Bileklik",
        },
        {
          src: "https://cf1.lidyana.com/pi/r/5478456/480x720/5",
          position: "5",
          alt: "Femme Romance For You VI Bileklik",
        },
      ],
    },
    {
      product_id: "5478459",
      name: "Femme Romance For You I Yüzük",
      parent_id: null,
      sku: "LIDY.LIDYRN3102",
      price: 1650,
      is_favorite: "",
      currency: {
        symbol: "TL",
        pre_defined: false,
      },
      discount_ratio: 30,
      special_price: 1155,
      stock_qty: 1,
      brand: {
        id: "5224",
        name: "LIDY",
        slug: "marka/lidy",
      },
      link: "lidy-sparkles-for-you-i-yuzuk",
      slug: "lidy-sparkles-for-you-i-yuzuk",
      images: [
        {
          src: "https://cf4.lidyana.com/pi/r/5478459/480x720/1",
          position: "1",
          alt: "Femme Romance For You I Yüzük",
        },
        {
          src: "https://cf4.lidyana.com/pi/r/5478459/480x720/3",
          position: "3",
          alt: "Femme Romance For You I Yüzük",
        },
        {
          src: "https://cf4.lidyana.com/pi/r/5478459/480x720/4",
          position: "4",
          alt: "Femme Romance For You I Yüzük",
        },
      ],
    },
    {
      product_id: "5478455",
      name: "Color Romance For You II Bileklik",
      parent_id: null,
      sku: "LIDY.LIDYBR2204",
      price: 2365,
      is_favorite: "",
      currency: {
        symbol: "TL",
        pre_defined: false,
      },
      discount_ratio: 30,
      special_price: 1655,
      stock_qty: 1068,
      brand: {
        id: "5224",
        name: "LIDY",
        slug: "marka/lidy",
      },
      link: "lidy-sisters-for-you-ii-bileklik",
      slug: "lidy-sisters-for-you-ii-bileklik",
      images: [
        {
          src: "https://cf0.lidyana.com/pi/r/5478455/480x720/1",
          position: "1",
          alt: "Color Romance For You II Bileklik",
        },
        {
          src: "https://cf0.lidyana.com/pi/r/5478455/480x720/2",
          position: "2",
          alt: "Color Romance For You II Bileklik",
        },
        {
          src: "https://cf0.lidyana.com/pi/r/5478455/480x720/4",
          position: "4",
          alt: "Color Romance For You II Bileklik",
        },
        {
          src: "https://cf0.lidyana.com/pi/r/5478455/480x720/5",
          position: "5",
          alt: "Color Romance For You II Bileklik",
        },
      ],
    },
    {
      product_id: "5478517",
      name: "Femme Romance For You III Bileklik",
      parent_id: null,
      sku: "LIDY.LIDYBR3202",
      price: 750,
      is_favorite: "",
      currency: {
        symbol: "TL",
        pre_defined: false,
      },
      discount_ratio: 30,
      special_price: 525,
      stock_qty: 2,
      brand: {
        id: "5224",
        name: "LIDY",
        slug: "marka/lidy",
      },
      link: "lidy-sparkles-for-you-ii-bileklik",
      slug: "lidy-sparkles-for-you-ii-bileklik",
      images: [
        {
          src: "https://cf2.lidyana.com/pi/r/5478517/480x720/1",
          position: "1",
          alt: "Femme Romance For You III Bileklik",
        },
        {
          src: "https://cf2.lidyana.com/pi/r/5478517/480x720/2",
          position: "2",
          alt: "Femme Romance For You III Bileklik",
        },
        {
          src: "https://cf2.lidyana.com/pi/r/5478517/480x720/4",
          position: "4",
          alt: "Femme Romance For You III Bileklik",
        },
        {
          src: "https://cf2.lidyana.com/pi/r/5478517/480x720/5",
          position: "5",
          alt: "Femme Romance For You III Bileklik",
        },
      ],
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case marketActionTypes.UPDATE_STOCK:
      for (let i = 0; i < state.data.length; i++) {
        let item = state.data[i];

        for (let j = 0; j < action.payload.length; j++) {
          if (item.product_id === action.payload[j].product_id)
            item.stock_qty -= action.payload[j].amount;
        }
      }

      return {
        ...state,
        data: [...state.data],
      };
    case marketActionTypes.GET_PRODUCTS:
      return {
        ...state,
        data: action.payload,
      };
    case marketActionTypes.SELL_PRODUCTS:
      // Get recent sales from local storage
      let recentSales = localStorage.getItem("recentSales");

      if (recentSales) {
        recentSales = JSON.parse(recentSales);
      } else {
        recentSales = [];
      }

      for (let i = 0; i < action.payload.length; i++) {
        // Push new sales to recentSales array
        recentSales.push(action.payload[i]);

        // Local variable for item
        let item = action.payload[i];

        // Update stock data
        for (let j = 0; j < state.data.length; j++) {
          if (state.data[j].product_id === item.product_id) {
            state.data[j].stock_qty -= item.amount;
          }
        }
      }

      // Save recent sales to local storage
      saveToLocalStorage("recentSales", recentSales);

      // Update stock info

      return {
        ...state,
        data: state.data,
      };

    default:
      return state;
  }
}
