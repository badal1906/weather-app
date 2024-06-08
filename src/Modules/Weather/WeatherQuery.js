import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = "YOUR_API_KEY";
const baseUrl = "https://api.openweathermap.org/data/2.5";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getWeatherByLocation: builder.query({
      query: (location) => `weather?q=${location}&appid=${apiKey}`,
    }),
  }),
});

export const { useGetWeatherByLocationQuery } = weatherApi;
