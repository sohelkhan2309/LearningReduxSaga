import { ADD_TO_CART, REMOVE_PRODUCT_FROM_CART } from "../types/cart_type";
import { SHOW_PRODUCTS_IN_CART, HIDE_PRODUCTS_IN_CART } from "../types/cart_type";

export const addToCart = (cart_product) => ({
  type: ADD_TO_CART,
  payload: cart_product,
});

export const showCartProducts = () => ({
  type: SHOW_PRODUCTS_IN_CART,
});

export const hideCartProducts = () => ({
  type: HIDE_PRODUCTS_IN_CART,
});

export const removeProductFromCart = (productId) => ({
  type: REMOVE_PRODUCT_FROM_CART,
  payload: productId,
});
