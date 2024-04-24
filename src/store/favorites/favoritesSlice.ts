import { IProduct } from "@/models/Product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFavoritesInitialState {
  products: IProduct[];
}

const initialState: IFavoritesInitialState = {
  products: []
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    likeProduct: (state, action: PayloadAction<IProduct>) => {
      if (!state.products.find(item => item.id === action.payload.id)) {
        state.products.push(action.payload);
      } else {
        state.products = state.products.filter(item => item.id !== action.payload.id);
      }
      // state.products.forEach(item => {
      //   if (item.id !== action.payload.id) {
      //     console.log('нет');
      //     state.products.push(action.payload);
      //   } else {
      //     console.log('да');
      //     state.products = state.products.filter(item => item.id !== action.payload.id);
      //   }
      // });
      // state.products.ad
    }
  }
});

export const {likeProduct} = favoritesSlice.actions; 

export default favoritesSlice.reducer;