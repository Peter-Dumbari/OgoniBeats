import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "./features/musics/musicSlices";

export const store = configureStore({
  reducer: {
    musics: musicReducer,
  },
});
