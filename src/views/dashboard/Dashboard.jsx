import { animated } from '@react-spring/web'
import { t } from 'i18next'
import React, { Suspense, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { CircleLoader } from 'react-spinners'
import Header from '../../components/Header'
import HeaderBackBtn from '../../components/HeaderBackBtn'
import Rombo from '../../components/Rombo'
import useFadeInAnimation from '../../hooks/useFadeInAnimation'
import { selectCurrentGame } from '../../store/games/games.slice'
import { selectUser } from '../../store/users/users.slice'

const Dashboard = () => {
	const [currentGameCat, setCurrentGameCat] = useState('')
	const props = useFadeInAnimation()
	const location = useLocation()
	const userLogged = useSelector(selectUser)
	const currentGame = useSelector(selectCurrentGame)

	// Check if user is logged in
	useEffect(() => {
		if(!userLogged) {
			window.history.push('/home')
		}

		// Check current game
		if(currentGame?.game_category_id == 1) setCurrentGameCat('recycling')
		if(currentGame?.game_category_id == 2) setCurrentGameCat('water')
		if(currentGame?.game_category_id == 3) setCurrentGameCat('fauna')
		if(currentGame?.game_category_id == 4) setCurrentGameCat('flora')
	}, [])

	return (
		<Suspense fallback={<CircleLoader color="#086375" size={25} />}>
			<section id="dashboard-page" className='overflow-hidden w-full'>

				{location.pathname === '/dashboard' ? (
					<Header user={userLogged} />
				) : (
					<HeaderBackBtn />
				)}

				{location.pathname === '/dashboard' ? (
					<animated.div
						style={props}
						className='h-screen'
					>
						<div className="container mt-4 w-full flex flex-col items-center">
							<h1 className="text-lima text-3xl my-2">
								{t('dashboard_heading')}
							</h1>

							<div className="relative mt-6">
								<Link to='/games' title='Games'>
									<Rombo
										className="absolute top-0 -left-14"
										textContent={
											<>
												<img src="/assets/icons8-control-64 (1).png" className="w-16" />
											</>
										}
										font="md"
										size='sm'
									/>
								</Link>
								<Link to='/profile/skills' title='Skills'>
									<Rombo
										className="absolute top-24 right-8"
										textContent={
											<img src="/assets/icons8-calificación-64 (1).png" className="w-16" />
										}
										font="md"
										size='sm'
									/>
								</Link>
								<Link to='/dashboard/general-info' title='General Info'>
									<Rombo
										className="absolute top-48 -left-14"
										textContent={
											<img src="/assets/icons8-información-64 (1).png" className="w-16" />
										}
										font="md"
										size='sm'
									/>
								</Link>
								<Link to='/profile' title='Profile'>
									<Rombo
										className="absolute top-24 left-8"
										textContent={
											<img src="/assets/icons8-usuario-de-género-neutro-64.png" className="w-16" />
										}
										font="md"
										size='sm'
									/>
								</Link>
							</div>
						</div>

						<div className="container mt-72 w-full flex flex-col items-center gap-10">
							<h2 className="mt-12 text-lima text-3xl text-center">
								{t('dashboard_subheading')}
							</h2>
							<div className="flex gap-24">
								{
									currentGame ? (
										<Link
											to={`/games/l/${currentGameCat}`}
										>
											<Rombo
												className="bg-lima"
												textContent={
													<p className='text-blue text-center text-sm'>{currentGame?.game_title}</p>
												}
												font="sm"
												size='sm'
											/>
										</Link>
									) : 
										(
											<p className='text-lima text-xl'>
												{t('dashboard_no_game')}
											</p>
										)
								}
							</div>
						</div>
					</animated.div>
				) : (
					<Outlet />
				)}
			</section>
		</Suspense>
	)
}
export default Dashboard