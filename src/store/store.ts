import { configureStore } from '@reduxjs/toolkit'
import gamesReducer from './games/games.slice.js'
import languageReducer from './language/language.slice.js'
import usersReducer from './users/users.slice.js'

const store = configureStore({
	reducer: {
		userLogged: usersReducer,
		games: gamesReducer,
		language: languageReducer
	}
})

export default store