import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  musics: [],
  music: null,
  loading: false,
  error: null,
};

const musicSlice = createSlice({
  name: "musics",
  initialState,
  reducers: {
    clearState: (state) => {
      (state.musics = []), (state.music = null), (state.error = null);
    },
  },
  extraReducers: (builder) => {},
});

export const {} = musicSlice.actions;
export default musicSlice.reducer;
