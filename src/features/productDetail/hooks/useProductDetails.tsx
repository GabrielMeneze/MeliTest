"use client"; // ✅ Adicionado para permitir Redux

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { getProductDetail } from "../slices/productDetailSlice";

export const useProductDetails = (id: string) => {
  const dispatch = useAppDispatch();
  const { product, status, error } = useAppSelector((state) => state.productDetail); 

  useEffect(() => {
    if (id) {
      dispatch(getProductDetail(id));
    }
  }, [id, dispatch]);

  return { product, status, error };
};
