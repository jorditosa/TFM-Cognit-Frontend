import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: '',
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "userLogged",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };
    }
  },
  setUserToken: (state, action) => {
    return {
      ...state,
      userToken: action.payload,
    };
  }
});

export const {
  setUser,
  setUserToken
} = usersSlice.actions;

export const selectUser = (state) => state.userLogged.user;

export default usersSlice.reducer;