import { t } from 'i18next'
import Rombo from '../../components/Rombo'
import HeaderGame from '../../components/HeaderGame'
import { useForm, SubmitHandler } from 'react-hook-form'
import { gameVerification } from '../../actions/game-verification'
import { useNavigate } from 'react-router-dom'
import { ENDPOINT } from '../../constants/endpoints'

type Inputs = {
	token: string
}

const GameCHECK = () => {
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError
	} = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		const res = await gameVerification(data.token)

		// Code verification
		if (!res || res.token !== data.token) {
			setError('token', { type: 'manual', message: 'Token incorrecto' })
		}

		// Code valid
		navigate(ENDPOINT.gameSuccess)
	}

	return (
		<section id="game-page" className='w-full h-screen'>

			<HeaderGame />

			<div className='flex container w-full flex-col items-center pt-[25vh]'>
				<h2 className="text-lima text-center text-3xl p-2">
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
					</div>

					<button
					type='submit'
					>
						<Rombo
							className="relative -bottom-20"
							textContent={<img src="/assets/icons8-de-acuerdo-64.png" className="w-16" />}
							font="sm"
							size='sm' 
							bg={''} />
					</button>

				</form>
			</div>
		</section>

	)
}
export default GameCHECK
