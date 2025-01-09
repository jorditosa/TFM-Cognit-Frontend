import { t } from 'i18next'
import Rombo from '../../components/Rombo'
import HeaderGame from '../../components/HeaderGame'
import { useForm, SubmitHandler } from 'react-hook-form'
import { gameVerification } from '../../actions/game-verification'
import { useNavigate } from 'react-router-dom'
import { ENDPOINT } from '../../constants/endpoints'
import { updatePlayerPoints } from '../../actions/update-player-points'
import { useGameStore, usePlayerStore } from '../../store/index'
import { FaCheckCircle } from 'react-icons/fa'

type Inputs = {
	token: string
}

const GameCHECK = () => {
	const user = usePlayerStore(state => state.player)
	const updatePoints = usePlayerStore(state => state.updatePlayerPoints)
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError
	} = useForm<Inputs>()
	const currentGame = useGameStore(state => state.currentGame)
	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		const res = await gameVerification(data.token)

		// Code verification
		if (!res || res.token !== data.token) {
			setError('token', { type: 'manual', message: 'Token incorrecto' })
			return
		}

		// Update player points
		const currentPoints = parseInt(user!.points); 
		const additionalPoints = parseInt(currentGame.points_reward!);
		const updatedPoints = ( currentPoints + additionalPoints ).toString()
		await updatePlayerPoints( user!, updatedPoints )

		// Update user state
		updatePoints(updatedPoints)

		// Redirect
		navigate(ENDPOINT.gameSuccess)
	}

	return (
		<section id="game-page" className='w-full h-screen'>

			<HeaderGame />

			<div className='flex container w-full flex-col items-center pt-[25vh] px-6'>
				<h2 className="text-lima text-center text-3xl">
					{t('validation_heading')}
				</h2>
				<p className="text-lima text-center">
					{t('validation_subheading')}
				</p>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className='pt-10 flex flex-col justify-center'
				>

					<div className="flex flex-col pb-2 m-0">
						<label
							htmlFor="username"
							className="block overflow-hidden rounded-md py-1 focus-within:border-secondary "
						>
							<span className="inline-block text-light pb-2"> 
							{t('token_confirmation_label')} 
							</span>

							<input
								type="text"
								id="token"
								placeholder={t('token_confirmation_placeholder')} 
								className={`${errors.token ? 'border-danger' : 'border-none'} bg-light mb-2 w-full border-2 p-2 rounded focus:border-transparent focus:outline-none focus:ring-0 text-dark focus-within:ring-1 focus-within:ring-secondary`}
								{...register("token",
									{ required: true }
								)}
							/>
						</label>
						{errors.token && <span className='text-danger'>{t('token_confirmation_error')} </span> }
					</div>

					<button
					type='submit'
					className='pt-12'
					>
						<Rombo
							textContent={<FaCheckCircle size={52} />
						}
							font="sm"
							size='sm' 
							bg='blue' />
					</button>

				</form>
			</div>
		</section>

	)
}
export default GameCHECK
