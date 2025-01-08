import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getGames } from '../../actions/playing-game'
import { Game } from '../../interfaces/game-interfaces'
import Rombo from '../../components/Rombo'
import { CircleLoader } from 'react-spinners'
import { ENDPOINT } from '../../constants/endpoints'
import { t } from 'i18next'
import { useGameStore } from '../../store'


const GamePLAY = () => {
	const navigate = useNavigate()
	const { category } = useParams()
	const [loading, setLoading] = useState(true)
	const setCurrentGame = useGameStore(state => state.setCurrentGame)
	const currentGame = useGameStore(state => state.currentGame)
	
	useEffect(() => {
		(async () => {
			const games = await getGames()
			// Filter by category
			const categoryGames = games.filter((game: Game) => game.categoryId === +category!);
			// Random game
			const gameData = categoryGames[Math.floor(Math.random() * categoryGames.length)]
			
			// Setting the game in all states
			setCurrentGame(gameData)
			setLoading(false)
		})()
	}, [setCurrentGame, category])

	return (
		<div className='h-screen flex justify-center items-center'>
			{
				loading
					? (<CircleLoader color="#AFFC41" size={90} />)
					: (
						<>

							<motion.div
								initial={{
									opacity: 0,
									y: 80
								}}
								animate={{
									opacity: 1,
									y: 0
								}}
								transition={{
									duration: 1
								}}
								className='flex flex-col items-center text-lima gap-10'
							>

								<h2 className='text-3xl uppercase font-bold'>{currentGame?.title}</h2>

								<p className='font-semibold text-lg'>{currentGame?.explanation}</p>

								<div className='w-full border-y-4 border-lima p-6 bg-lima/10 flex flex-col items-center italic font-semibold'>
									<h3 className='uppercase'>Recompensa</h3>
									<div className='flex items-center gap-2'>
										<span>{currentGame?.points_reward}</span>
										<img src="/assets/icons8-comida-natural-64.png" className="w-12" />
									</div>
								</div>

							</motion.div>
							<Rombo
								textContent={
									<button
										onClick={() => navigate(ENDPOINT.gameFinished)}
										className='h-full flex items-center'
									>
										{t('game_validation')}
									</button>
								}
								font='sm'
								size='sm'
								bg='blue'
								className='absolute right-0 bottom-0'
							/>
						</>

					)
			}
		</div>
	)


}
export default GamePLAY