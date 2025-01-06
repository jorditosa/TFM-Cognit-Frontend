import { t } from 'i18next'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ConfettiComponent from '../../components/Confetti'
import { motion } from 'framer-motion'
import { useGameStore } from '../../store/games/games-store'
import { getAllGames } from '../../actions/playing-game'


const GamePLAY = () => {
	const navigate = useNavigate()
	const [openConff, setOpenConff] = useState(false)
	const setCurrentGame = useGameStore(state => state.setGame)
	const game = useGameStore(state => state.game)

	const handleFinishedGame = () => {
		navigate('/games-check')
	}


	useEffect(() => {
		(async () => {
			const category = location.pathname.split('/')[location.pathname.split('/').length - 1]

			const games = await getGames(category)
			console.log(games)
			// Random game
			const game = games[Math.floor(Math.random() * games.length)]

			setTimeout(() => {
				setOpenConff(true)
			}, 100)


			// Setting the game
			setCurrentGame(1)
		})()
	}, [setCurrentGame])

	return (
		<>
			{
				game &&
				<motion.div 
					className="bg-blue/5 container reflect mt-40 py-10 w-full flex flex-col justify-center px-8 rounded-lg">
					<span className='text-center text-6xl text-lima'> ⬇⬇  </span>
					<h1 className="text-lima text-3xl rounded-full my-6 text-center"> {game.game_title} </h1>

					<p className="p-2 mt-4 text-lima text-xl">
						{game.game_description}
					</p>

					<button
						className="block mt-20 py-2 w-full rounded-md border-lima-200 shadow-sm text-lima bg-blue border-4 border-lima text-2xl"
						onClick={handleFinishedGame}
					>
						{t('game_action_cta')}
					</button>

					<ConfettiComponent active={openConff} />

				</motion.div>
			}
		</>
	)
}
export default GamePLAY