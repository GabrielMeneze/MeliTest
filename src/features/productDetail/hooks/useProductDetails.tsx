"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { getProductDetail } from "../slices/productDetailSlice";

export const useProductDetails = (id: string) => {
  const dispatch = useAppDispatch();
  const { product, status, error } = useAppSelector((state) => state.productDetail);

  useEffect(() => {
    if (id && status === "idle") {
      dispatch(getProductDetail(id));
    }
  }, [id, status, dispatch]); // ✅ Adicionamos status para evitar chamadas repetidas

  return { product, status, error };
};
