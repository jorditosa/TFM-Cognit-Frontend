import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App.jsx';
import Register from '../views/auth/Register.jsx';
import Dashboard from '../views/dashboard/Dashboard.jsx';
import DashboardInfo from '../views/dashboard/DashboardInfo.jsx';
import ErrorPage from '../views/ErrorPage.jsx';
import Home from '../views/Home.jsx';
import Languages from '../views/Languages.jsx';
import Profile from '../views/profile/Profile.jsx';
import ProfileAbout from '../views/profile/ProfileAbout.jsx';
import ProfileSkills from '../views/profile/ProfileSkills.jsx';
import TimesUp from '../views/TimesUp.jsx';

import GameLayout from '../views/games/GameLayout.jsx';
import GamePLAY from '../views/games/GamePLAY.jsx';
import GamesMenu from '../views/games/GamesMenu.jsx';
import ProfileInfo from '../views/profile/ProfileInfo.jsx';

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
  ]
)

export default router;