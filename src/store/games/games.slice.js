import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  games: [],
  loading: false,
  error: null,
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    setGamesStart(state, action) {
      state.games = action.payload;
      state.loading = true;
      state.error = null;
    },
  },
});

export const { setGamesStart } = gamesSlice.actions;

export default gamesSlice.reducer;