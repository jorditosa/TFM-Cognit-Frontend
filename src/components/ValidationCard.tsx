import { t } from 'i18next'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { updateUserInfo } from '../services/userService'
import ConfettiComponent from './Confetti'
import { useGameStore } from '../store/games/games-store'

interface Props {
	game: any
}

const ValidationCard = ({ game }: Props) => {
	const navigate = useNavigate()
	const [openConff, setOpenConff] = useState(false)
	const setCurrentGame = useGameStore(state => state.setGame)

	const { game_points_reward: points, game_skill_points_reward: skill_points, game_reward_type: skill } = game

	const handleGetRewards = async () => {
		// Adding point to user

		// Adding skill to user

		// Updating info on Database
		await updateUserInfo({ points, skill, skill_points, user: user.user_id }, user.user_id)

		// Reset games
		setCurrentGame(0)

		// Redirect
		navigate('/dashboard')
	}

	useEffect(() => {
		setInterval(() => {
			setOpenConff(!openConff)
		}, 3000)
	})

	return (
		<section className="w-full h-full relative z-50 flex justify-center items-center bg-blue border-8 border-lima text-lima rounded-3xl shadow-xl shadow-lima">
			<div className="max-w-xl p-8 text-center sm:p-12">
				<p className="text-4xl font-semibold tracking-widest mt-8">
					{t('validation_congratulations_header')}
				</p>

				<h2 className="mt-8 text-2xl font-bold">
					{t('validation_congratulations_subheader')}
				</h2>

				<div className="flex items-center justify-center mt-8 text-4xl text-lima gap-4">
					<span>{points}</span>
					<img src="/assets/icons8-comida-natural-64.png" alt="point icon" />
				</div>

				<div className="flex items-center justify-center mt-8 text-4xl text-lima gap-4">
					<span>{skill_points}</span>
					<p className="m-0 text-2xl"> {t('validation_congratulations_skill_point')}</p>
				</div>

				<button
					className="block mt-14 py-2 w-full rounded-md border-lima-200 shadow-lg shadow-aqua text-blue font-semibold bg-lima border-4 border-mint text-3xl"
					onClick={handleGetRewards}
				>
					{t('validation_congratulations_button')}
				</button>
			</div>

			<ConfettiComponent active={openConff} />

		</section>
	)
}

export default ValidationCard