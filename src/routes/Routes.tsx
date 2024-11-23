import { createBrowserRouter, Navigate } from 'react-router-dom'
import App from '../App'
import Register from '../views/auth/Register'
import Dashboard from '../views/dashboard/Dashboard'
import DashboardInfo from '../views/dashboard/DashboardInfo'
import ErrorPage from '../views/ErrorPage'
import Home from '../views/Home'
import Languages from '../views/Languages'
import Profile from '../views/profile/Profile'
import ProfileAbout from '../views/profile/ProfileAbout'
import ProfileSkills from '../views/profile/ProfileSkills'
import TimesUp from '../views/TimesUp'

import ErrorApp from '../views/ErrorApp'
import GameCHECK from '../views/games/GameCHECK'
import GameLayout from '../views/games/GameLayout'
import GamePLAY from '../views/games/GamePLAY'
import GamesMenu from '../views/games/GamesMenu'
import HomeInfo from '../views/HomeInfo/HomeInfo'
import ProfileInfo from '../views/profile/ProfileInfo'

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <App />,
			errorElement: <ErrorPage />,
			children: [
				{ path: '/home', element: <Home /> },
				{ path: '/register', element: <Register /> },
				{ path: '/language', element: <Languages /> },
				{ path: '/home-info', element: <HomeInfo /> },
				{ path: '/', element: <Navigate to="/home" /> },
			]
		},
		{
			path: '/timesup',
			element: <TimesUp />,
		},
		{
			path: '/dashboard',
			element: <Dashboard />,
			errorElement: <ErrorPage />,
			children: [
				{ path: '/dashboard/general-info', element: <DashboardInfo /> },
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
			path: '/games',
			element: <GamesMenu />,
		},
		{
			path: '/games/l',
			element: <GameLayout />,
			children: [
				{ path: '/games/l/:type', element: <GamePLAY /> },
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