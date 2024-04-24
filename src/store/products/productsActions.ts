import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/shared/api/api";
import { GET_ALL_PRODUCTS } from "@/shared/api/consts";

export const fetchAllProducts = createAsyncThunk(
  'products/allProducts',
  async () => {
    const response = await api.get(GET_ALL_PRODUCTS);
    return response.data;
  }
);