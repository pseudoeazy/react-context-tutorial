import React, { useReducer, useContext, createContext } from "react";
import CartProduct from "types/cart-product";
import Product from "types/product";

interface Props {
  children: React.ReactNode;
}

type CartData = {
  products: CartProduct[];
};

type CartAction = {
  type: "ADD_TO_CART";
  payload: {
    product: Product;
    quantity: number;
  };
};

export const getTotalItems = (products: CartProduct[]) => {
  const total = products.reduce(
    (quantity, cartProduct) => quantity + cartProduct.quantity,
    0
  );

  return total;
};

const addItemToCart = (state: CartData, action: CartAction): CartData => {
  const productIndex = state.products.findIndex(
    (item) => item.product.id === action.payload.product.id
  );

  if (productIndex > -1) {
    const products = [...state.products];
    const product = products[productIndex];

    product.quantity += action.payload.quantity;
    products[productIndex] = product;
    return { ...state, products };
  }

  return {
    ...state,
    products: [...state.products, action.payload],
  };
};

export const cartReducer = (state: CartData, action: CartAction) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return addItemToCart(state, action);

    default:
      return state;
  }
};

const defaultValues: CartData = {
  products: [],
};

const INITIAL_STATE = {
  cart: defaultValues,
  dispatch: (action: CartAction): void => {},
};

const CartContext = createContext<{
  cart: CartData;
  dispatch: React.Dispatch<CartAction>;
}>(INITIAL_STATE);

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, defaultValues);

  return (
    <CartContext.Provider
      value={{
        cart,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
