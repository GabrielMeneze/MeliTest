import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductDetail } from "../types";

interface ProductDetailState {
  product: ProductDetail | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProductDetailState = {
  product: null,
  status: "idle",
  error: null,
};

// 🔹 Thunk para buscar detalhes do produto diretamente no slice
export const getProductDetail = createAsyncThunk("productDetail/fetch", async (id: string) => {
  const response = await axios.get(`http://localhost:5000/api/items/${id}`);
  return response.data.item; // 🔹 Apenas a parte relevante da resposta
});

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProductDetail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product = action.payload;
      })
      .addCase(getProductDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Erro ao carregar detalhes do produto";
      });
  },
});

export default productDetailSlice.reducer;
