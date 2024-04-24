import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { useDispatch, useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { productsApi } from "./products/productsQuery";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "./product/productQuery";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistCOnfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistCOnfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
    // хз как исправить ошибку non-serializable action
    getDefaultMiddleware({serializableCheck: false}).concat([productsApi.middleware, productApi.middleware])
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export default store;