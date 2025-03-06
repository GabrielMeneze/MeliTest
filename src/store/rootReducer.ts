import { combineReducers } from "@reduxjs/toolkit";
import searchReducer from "../features/search/slices/searchSlice";
import productDetailReducer from "../features/productDetail/slices/productDetailSlice";

const rootReducer = combineReducers({
  search: searchReducer,
  productDetail: productDetailReducer, 
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
