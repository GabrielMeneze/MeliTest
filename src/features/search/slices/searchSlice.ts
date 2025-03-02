import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SearchResponse } from "../types";

// Estado inicial tipado
interface SearchState {
  products: SearchResponse["items"];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: SearchState = {
  products: [],
  status: "idle",
  error: null,
};

// Thunk para buscar produtos
export const fetchSearchResults = createAsyncThunk("search/fetchResults", async (query: string) => {
  const response = await axios.get(`/api/items?q=${query}`);
  return response.data.items;
});

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Erro ao buscar produtos";
      });
  },
});

export default searchSlice.reducer;
