import Confetti from 'react-confetti'
import Rombo from '../../components/Rombo'

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
					width={1000}
					height={1000}
				/>
				<h2 className='uppercase'>Enhorabona!</h2>
				<p>Joc superat</p>

				<Rombo
					className="relative -bottom-20"
					textContent={
						<p>Tornar al inici</p>
					}
					font="md"
					size='md' 
					bg='blue' 
					/>
			</div>




		</section>

	)
}
export default GameSUCCESS
