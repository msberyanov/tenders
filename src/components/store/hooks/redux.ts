import { TypedUseSelectorHook, useSelector } from "react-redux";
import { StoreStateType } from "../index";

export const useStoreSelector: TypedUseSelectorHook<StoreStateType> = useSelector;
