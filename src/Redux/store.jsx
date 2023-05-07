import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./features/apiSlice/apiSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(apiSlice.middleware),
});

export default store;
