import { products } from "../../utils/data";

const intialState = {
  products: products,
  carts: [],
};

const productReducer = (state = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      const itemInCart = state.carts.find((item) => item.id === payload);
      const newItemCart = state.products.find((item) => item.id === payload);
      if (!itemInCart) {
        return {
          ...state,
          carts: [...state.carts, newItemCart],
        };
      } else {
        
        return state;
      }
    case "INCREMENT_ITEM":
      const originalPrice = state.products.find(
        (item) => item.id === payload
      ).price;
      const incCarts = state.carts.map((item) => {
        if (item.id === payload) {
          return {
            ...item,
            price: item.price + originalPrice,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        carts: incCarts,
      };
    case "DECREMENT_ITEM":
      const originalPrice2 = state.products.find(
        (item) => item.id === payload
      ).price;
      const incCarts2 = state.carts.map((item) => {
        if (item.id === payload) {
          return {
            ...item,
            price: item.price - originalPrice2,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        carts: incCarts2,
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        carts: state.carts.filter(item => item.id !== payload)
      }
    case "RESET_CART":
      return {
        ...state,
        carts: []
      }
    default:
      return state;
  }
};

export default productReducer;
