import { createBrowserRouter, Navigate } from 'react-router-dom'
import App from '../App'
import DashboardInfo from '../views/dashboard/DashboardInfo'
import ErrorPage from '../views/ErrorPage'
import Home from '../views/home/Home'
import Profile from '../views/dashboard/DashboardProfile'
import ProfileAbout from '../views/profile/ProfileAbout'
import ProfileSkills from '../views/profile/ProfileSkills'
import TimesUp from '../views/TimesUp'

import ErrorApp from '../views/ErrorApp'
import GameCHECK from '../views/games/GameCHECK'
import GameLayout from '../views/games/GameLayout'
import GamePLAY from '../views/games/GamePLAY'
import HomeInfo from '../views/home/HomeInfo'
import ProfileInfo from '../views/profile/ProfileInfo'
import Dashboard from '../views/dashboard/Dashboard'
import DashboardLayout from '../views/dashboard/DashboardLayout'
import Languages from '../views/home/Languages'
import Authentication from '../views/auth/Authentication'
import Login from '../views/auth/Login'
import Register from '../views/auth/Register'
import ConfirmAccount from '../views/auth/ConfirmAccount'
import DashboardProfile from '../views/dashboard/DashboardProfile'
import DashboardGames from '../views/dashboard/DashboardGames'
import GameSUCCESS from '../views/games/GameSUCCESS'

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <App />,
			errorElement: <ErrorPage />,
			children: [
				{ path: '/home', element: <Home /> },
				{ path: '/language', element: <Languages /> },
				{ path: '/home-info', element: <HomeInfo /> },
				{ path: '/auth', element: <Authentication /> },
				{ path: '/login', element: <Login /> },
				{ path: '/register', element: <Register /> },
				{ path: '/confirm-account', element: <ConfirmAccount /> },
				{ path: '/', element: <Navigate to="/home" /> },
			]
		},
		{
			path: '/timesup',
			element: <TimesUp />,
		},
		{
			path: '/dashboard',
			element: <DashboardLayout />,
			errorElement: <ErrorPage />,
			children: [
				{ path: '/dashboard', element: <Dashboard /> },
				{ path: '/dashboard/general-info', element: <DashboardInfo /> },
				{ path: '/dashboard/profile', element: <DashboardProfile /> },
				{ path: '/dashboard/games', element: <DashboardGames /> },
			]
		},
		{
			path: '/profile',
			element: <Profile />,
			children: [
				{ path: '/profile/skills', element: <ProfileSkills /> },
				{ path: '/profile/about', element: <ProfileAbout /> },
				{ path: '/profile/info', element: <ProfileInfo /> },
			]
		},
		{
			path: '/games/l',
			element: <GameLayout />,
			children: [
				{ path: '/games/l/:category', element: <GamePLAY /> },
				{ path: '/games/l/check', element: <GameCHECK /> },
				{ path: '/games/l/success', element: <GameSUCCESS /> },
			]
		},
		{
			path: '/games-check',
			element: <GameCHECK />,
		},
		{
			path: '/500',
			element: <ErrorApp />,
		}
	]
)

export default router