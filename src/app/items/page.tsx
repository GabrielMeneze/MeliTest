"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { fetchSearchResults } from "@/features/search/slices/searchSlice";
import { AppDispatch } from "@/store/store";
import SearchScreen from "@/features/search/screens/SearchScreen";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("search");

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (query) {
      dispatch(fetchSearchResults(query));
    }
  }, [query, dispatch]);

  return <SearchScreen />;
}
