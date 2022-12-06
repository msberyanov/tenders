import { configureStore } from "@reduxjs/toolkit";
import { tendersApi } from "./tenders/api";
import { tendersReducer, tendersSlice } from "./tenders/slice";
import { userReducer, userSlice } from "./user/slice";
import { userApi } from "./user/api";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [tendersApi.reducerPath]: tendersApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [tendersSlice.name]: tendersReducer,
    [userSlice.name]: userReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(tendersApi.middleware, userApi.middleware)
});

setupListeners(store.dispatch);

export type TendersStoreType = ReturnType<typeof store.getState>
export type TendersStoreDispatch = typeof store.dispatch