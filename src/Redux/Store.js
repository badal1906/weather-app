import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { weatherApi } from "../Modules/Weather/WeatherQuery";
import EcommerceApi from "../Modules/Ecommerce/EcommerceQuery";
import UserSlice from "./UserSlice";

const loadUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");

  if (user) {
    return JSON.parse(user);
  }
  return null;
};

export const store = configureStore({
  reducer: {
    user: UserSlice,
    [weatherApi.reducerPath]: weatherApi.reducer,
    [EcommerceApi.reducerPath]: EcommerceApi.reducer,
  },
  preloadedState: {
    user: {
      user: loadUserFromLocalStorage(),
    },
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      weatherApi.middleware,
      EcommerceApi.middleware
    ),
});

setupListeners(store.dispatch);

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("user", JSON.stringify(state.user.user));
});

export default store;
