import Confetti from 'react-confetti'
import Rombo from '../../components/Rombo'
import { Link } from 'react-router-dom'
import { ENDPOINT } from '../../constants/endpoints'
import { t } from 'i18next'

const GameSUCCESS = () => {


	// const handleValidation = () => {

	// 	// 1. Check code pattern and length
	// 	if (!Regex.CODE_VALIDATION.test(checkCode) || checkCode.length !== 6) {
	// 		setMsg('El format del Codi és incorrecte')
	// 		return
	// 	}

	// 	// 2. Check validation
	// 	if (checkCode === user.user_code_validation) {
	// 		setIsValidCode(true)
	// 	} else {
	// 		setMsg('La validació no es correcta')
	// 	}
	// }

	return (
		<section className='w-full h-screen bg-lima/20'>

			<div className='w-full h-screen text-6xl flex flex-col justify-center items-center text-lima'>
				<Confetti
					width={800}
					height={1200}
					className='mx-auto'
				/>
				<p>
				{t('game_success_title1')}
				</p>
				<p>
				{t('game_success_title2')}
				</p>

				<Link
				to={ENDPOINT.dashboard}
				>
				<Rombo
					className="relative -bottom-20"
					textContent={
							<p>
								{t('game_success_back_btn')}
							</p>
						}
						font="md"
						size='md' 
						bg='blue' 
						/>
						</Link>
			</div>




		</section>

	)
}
export default GameSUCCESS
