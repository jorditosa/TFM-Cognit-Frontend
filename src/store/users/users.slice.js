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
    },
    setUserToken: (state, action) => {
      return {
        ...state,
        userToken: action.payload,
      };
    },
    addPoints: (state, action) => {
      return {
        ...state,
        user: {
          ...state.user,
          user_points: state.user.user_points + action.payload
        }
      };
    },
    addSkillPoints: (state, action) => {
      console.log(action.payload);
      const { skill_points, skill } = action.payload;
      console.log(skill_points, skill);

      switch (skill) {
        case 'Knowledge':
          return {
            ...state,
            user: {
              ...state.user,
              skill_know_points: state.user.skill_know_points + skill_points
            }
          };
        case 'Sustainability':
          return {
            ...state,
            user: {
              ...state.user,
              skill_sust_points: state.user.skill_sust_points + skill_points
            }
          };
        case 'Protector':
          return {
            ...state,
            user: {
              ...state.user,
              skill_prot_points: state.user.skill_prot_points + skill_points
            }
          };
        case 'Exploration':
          return {
            ...state,
            user: {
              ...state.user,
              skill_expl_points: state.user.skill_expl_points + skill_points
            }
          };
        default:
          return state;
      }
    },
  },
});

export const {
  setUser,
  setUserToken,
  addPoints,
  addSkillPoints
} = usersSlice.actions;

export const selectUser = (state) => state.userLogged.user;

export default usersSlice.reducer;