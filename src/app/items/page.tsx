"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchResults } from "@/features/search/slices/searchSlice";
import { RootState, AppDispatch } from "@/store/store";
import SearchScreen from "@/features/search/screens/SearchScreen";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("search");

  const dispatch = useDispatch<AppDispatch>();
  const { products, status, error } = useSelector((state: RootState) => state.search);

  useEffect(() => {
    if (query) {
      dispatch(fetchSearchResults(query));
    }
  }, [query, dispatch]);

  return <SearchScreen />;
}
