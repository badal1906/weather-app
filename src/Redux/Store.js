import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { weatherApi } from "../Modules/Weather/WeatherQuery";
import EcommerceApi from "../Modules/Ecommerce/EcommerceQuery";

export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    [EcommerceApi.reducerPath]: EcommerceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      weatherApi.middleware,
      EcommerceApi.middleware
    ),
});

setupListeners(store.dispatch);

export default store;
