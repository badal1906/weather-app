import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiKey = "7cf33e7bf6554c1de341900bf5bf908e";
const baseUrl = "https://api.openweathermap.org/data/2.5";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getWeatherByLocation: builder.query({
      query: (location) => {
        return `/weather?lat=${location.lat || 28.6517178}&lon=${
          location.lon || 77.2219388
        }&appid=${apiKey}`;
      },
    }),
    getTodayForecast: builder.query({
      query: (location) => {
        return `/forecast?lat=${location.lat || 28.6517178}&lon=${
          location.lon || 77.2219388
        }&appid=${apiKey}`;
      },
      transformResponse: (res) => {
        const today = new Date();
        const todayDate = today.toISOString().split("T")[0];

        const todayWeatherData = res.list.filter((forecast) => {
          const forecastDate = new Date(forecast.dt_txt.split(" ")[0]);
          return forecastDate.toISOString().split("T")[0] === todayDate;
        });

        return todayWeatherData;
      },
    }),
  }),
});

export const { useGetWeatherByLocationQuery, useGetTodayForecastQuery } =
  weatherApi;
