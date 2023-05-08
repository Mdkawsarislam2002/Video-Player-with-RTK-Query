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
    getSingleVideo: builder.query({
      query: (id) => `videos/${id}`,
    }),
    getRelatedVideo: builder.query({
      query: ({ title }) => {
        // http://localhost:9000/videos?title_like=tailwind&_limit=1
        let req = title?.split(" ");
        let generateString = req?.map((param) => `title_like=${param}`);
        let queryString = `videos?${generateString?.join("&")}`;
        return queryString;
      },
    }),
  }),
});
export default apiSlice;
export const {
  useGetVideosQuery,
  useGetSingleVideoQuery,
  useGetRelatedVideoQuery,
} = apiSlice;
