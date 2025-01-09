import { t } from 'i18next'
import { Link } from 'react-router-dom'
import Rombo from '../../components/Rombo'
import { motion } from 'framer-motion'
import { ENDPOINT } from '../../constants/endpoints'
import { useEffect, useState } from 'react'
import { CircleLoader } from 'react-spinners'
import { FaGamepad, FaInfo, FaStar, FaUser } from 'react-icons/fa'
import { useCookies } from 'react-cookie'

const Dashboard = () => {
	const [loading, setLoading] = useState(true)
	const [cookies] = useCookies(['COGNIT_USER'])
	const user = cookies.COGNIT_USER || {};

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false)
		}, 1000)

		return () => clearTimeout(timer)
	}, [])

	return (
		<section
		className='h-screen flex justify-center'
		>
			{
				loading
				? ( <CircleLoader color="#AFFC41" size={90} /> )
				: (
						<motion.div
						>
							<div className="container mt-4 w-full flex flex-col items-center">
								<h1 className="text-lima text-3xl my-2">
									{t('dashboard_heading')}
								</h1>
	
								<div className="relative mt-6">
									<Link to={ENDPOINT.games} title='Games'>
										<Rombo
											className="absolute top-0 -left-14"
											textContent={
												<>
													<FaGamepad size={52} />
												</>
											}
											font="md"
											size='sm'
											bg='lima'
										/>
									</Link>
									<Link 
									to={ENDPOINT.skills} 
									state={{user}}
									title='Skills'
									>
										<Rombo
											className="absolute top-24 right-8"
											textContent={
												<FaStar size={52} />
	
											}
											font="md"
											size='sm'
											bg='lima'
										/>
									</Link>
									<Link to='/dashboard/general-info' title='General Info'>
										<Rombo
											className="absolute top-48 -left-14"
											textContent={
												<FaInfo size={52} />
											}
											font="md"
											size='sm'
											bg='lima'
										/>
									</Link>
									<Link 
									to={ENDPOINT.profile} 
									state={{user}}
									title='Profile'>
										<Rombo
											className="absolute top-24 left-8"
											textContent={
												<FaUser size={52} />
											}
											font="md"
											size='sm'
											bg='lima'
										/>
									</Link>
								</div>
							</div>
	
							<div className="container mt-72 w-full flex flex-col items-center gap-10">
								<h2 className="mt-12 text-lima text-3xl text-center">
									{t('dashboard_subheading')}
								</h2>
								{/* <div className="flex gap-24">
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
								</div> */}
							</div>
						</motion.div>
				)
			}
			</section>		
	)
}
export default Dashboard