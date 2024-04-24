import { combineReducers } from "@reduxjs/toolkit";
import CartReducer from "@/store/cart/cartSlice";
import FavoritesReducer from "@/store/favorites/favoritesSlice";
import { productsApi } from "./products/productsQuery";
import { productApi } from "./product/productQuery";

export const rootReducer = combineReducers({
  cart: CartReducer,
  favorites: FavoritesReducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [productApi.reducerPath]: productApi.reducer
});

export type RootState = ReturnType<typeof rootReducer>;