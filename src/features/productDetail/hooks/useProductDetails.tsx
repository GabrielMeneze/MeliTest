"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { getProductDetail, resetProductDetail } from "../slices/productDetailSlice";

export const useProductDetails = (id: string) => {
  const dispatch = useAppDispatch();
  const { product, status, error } = useAppSelector((state) => state.productDetail);

  useEffect(() => {
     // Evita chamadas sem um ID válido
    if (!id) return;

    // Reseta apenas se o ID mudou
    if (product?.id !== id) {
      dispatch(resetProductDetail());
      dispatch(getProductDetail(id));
    }

  }, [id]); 

  return { product, status, error };
};
