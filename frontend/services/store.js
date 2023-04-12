import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { consulApi } from "./api";
export const store = configureStore({
  reducer: {
    [consulApi.reducerPath]: consulApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(consulApi.middleware)
  
});

setupListeners(store.dispatch)