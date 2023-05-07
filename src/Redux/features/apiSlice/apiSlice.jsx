import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000/",
  }),
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => "videos",
    }),
  }),
});
export default apiSlice;
export const { useGetVideosQuery } = apiSlice;
