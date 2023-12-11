import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  games: [],
  currentGame: {},
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
    setCurrentGame(state, action) {
      state.currentGame = action.payload;
    },
  },
});

export const { setGamesStart, setCurrentGame } = gamesSlice.actions;

export const selectGames = (state) => state.games.games;
export const selectCurrentGame = (state) => state.games.currentGame;

export default gamesSlice.reducer;