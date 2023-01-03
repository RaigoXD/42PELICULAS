import { configureStore } from "@reduxjs/toolkit";
import globalsReducer from "./globals/globals";

export default configureStore({
  reducer: {
    globals: globalsReducer,
  },
});
