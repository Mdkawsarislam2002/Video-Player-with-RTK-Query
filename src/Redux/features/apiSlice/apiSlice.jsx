import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000/",
  }),
  tagTypes: ["Videos", "SingleVideo", "RelatedVideo"],
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => "videos",
      keepUnusedDataFor: 600,
      providesTags: ["Videos"],
    }),
    getSingleVideo: builder.query({
      query: (id) => `videos/${id}`,
      providesTags: (result, error, arg) => [
        {
          type: "SingleVideo",
          id: arg,
        },
      ],
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

    DeleteVideo: builder.mutation({
      query: (id) => ({
        url: `videos/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Videos"],
    }),

    EditVideo: builder.mutation({
      query: ({ id, body }) => ({
        url: `videos/${id}`,
        method: "PATCH",
        body: body,
      }),
      invalidatesTags: (result, error, arg) => [
        "Videos",
        {
          type: "SingleVideo",
          id: arg.id,
        },
      ],
    }),
  }),
});
export default apiSlice;
export const {
  useGetVideosQuery,
  useGetSingleVideoQuery,
  useGetRelatedVideoQuery,
  useAddVideoMutation,
  useDeleteVideoMutation,
  useEditVideoMutation,
} = apiSlice;
