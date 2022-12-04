import { configureStore } from "@reduxjs/toolkit";
import { tendersApi } from "./tenders/api";
import { tendersReducer, tendersSlice } from "./tenders/slice";

export const store = configureStore({
  reducer: {
    [tendersApi.reducerPath]: tendersApi.reducer,
    [tendersSlice.name]: tendersReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(tendersApi.middleware)
});

export type StoreStateType = ReturnType<typeof store.getState>
