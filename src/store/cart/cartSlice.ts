import { IProduct } from "@/models/Product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICartInitialState {
  cartProducts: IProduct[];
  cartSum: number;
}

const initialState: ICartInitialState = {
  cartProducts: [],
  cartSum: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      if (!state.cartProducts.find(product => product.id === action.payload.id)) {
        state.cartProducts.push({...action.payload, count: 1});
        // state.productsItemsSum.push({id: action.payload.id, count: 1});
        state.cartSum = state.cartSum + action.payload.price;
      } else {
        state.cartProducts = state.cartProducts.filter(product => product.id !== action.payload.id);
        // state.productsItemsSum.filter(productSumItem => productSumItem.id !== action.payload.id);
        state.cartSum = state.cartSum - action.payload.price;
        // дублирование
      }
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      state.cartProducts = state.cartProducts.filter(cartProduct => cartProduct.id !== action.payload.id);
      // state.productsItemsSum.filter(productSumItem => productSumItem.id !== action.payload.id);
      state.cartSum = state.cartSum - action.payload.price;
      // дублирование
    },
    incrementProduct: (state, action: PayloadAction<IProduct>) => {
      //TO FIX уже приходит сумма и мы складываем сумму с суммой
      // let productCost = state.productsCost.find(productCart => productCart.id === action.payload.id).cost;
      state.cartProducts.forEach(product => {
        if (product.id === action.payload.id) {
          if (product.count) {
            product.count += 1
            state.cartSum += product.price;
          }
        }
      })

    },
    decrementProduct: (state, action: PayloadAction<IProduct>) => {
      // let index = state.cartProducts.indexOf(action.payload);
      // console.log(index);
      // state.cartProducts = state.cartProducts.slice(index, 1);
      state.cartProducts.forEach(product => {
        if (product.id === action.payload.id) {
          if (product.count) {
            product.count -= 1;
            state.cartSum -= product.price;
          }
        }
      })
    }
  },
});

export const {addToCart, removeFromCart, incrementProduct, decrementProduct} = cartSlice.actions;

export default cartSlice.reducer;