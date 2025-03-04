import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SearchResponse } from "../types";

// 🔹 Estado inicial
interface SearchState {
  products: SearchResponse["items"];
  categories: string[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  lastQuery: string | null;
}

const initialState: SearchState = {
  products: [],
  categories: [],
  status: "idle",
  error: null,
  lastQuery: null,
};

// 🔹 Thunk para buscar produtos no backend real
export const fetchSearchResults = createAsyncThunk("items/fetchResults", async (query: string, { getState }) => {
  const state = getState() as { search: SearchState };
  
  // 🔹 Se a busca já foi feita recentemente, não refaz a chamada
  if (state.search.lastQuery === query) {
    return { items: state.search.products, categories: state.search.categories };
  }

  const response = await axios.get(`http://localhost:5000/api/items?q=${query}`);
  return response.data;
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
        state.products = action.payload.items;
        state.categories = action.payload.categories;
        state.lastQuery = action.meta.arg; // 🔹 Salva a última query
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Erro ao buscar produtos";
      });
  },
});

export default searchSlice.reducer;
