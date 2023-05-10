import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000/",
  }),
  tagTypes: ["Videos"],
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => "videos",
      keepUnusedDataFor: 600,
      providesTags: ["Videos"],
    }),
    getSingleVideo: builder.query({
      query: (id) => `videos/${id}`,
    }),
    getRelatedVideo: builder.query({
      query: ({ title }) => {
        let req = title?.split(" ");
        let generateString = req?.map((param) => `title_like=${param}`);
        let queryString = `videos?${generateString?.join("&")}`;
        return queryString;
      },
    }),
    addVideo: builder.mutation({
      query: (data) => ({
        url: "videos",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Videos"],
    }),
  }),
});
export default apiSlice;
export const {
  useGetVideosQuery,
  useGetSingleVideoQuery,
  useGetRelatedVideoQuery,
  useAddVideoMutation,
} = apiSlice;
