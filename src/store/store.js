import { configureStore } from '@reduxjs/toolkit'
import gamesReducer from './games/games.slice'
import languageReducer from './language/language.slice'
import usersReducer from './users/users.slice'

const store = configureStore({
  reducer: {
    userLogged: usersReducer,
    games: gamesReducer,
    language: languageReducer
  }
})

export default store