"use client"

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState } from "./rootReducer";
import { AppDispatch } from "./store";
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
