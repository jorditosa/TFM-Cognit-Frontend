import Logo from '/assets/logo-no-background.svg'

const TimesUp = () => {
	return (
		<section id='timesup-page' className='h-screen'>
			<img src={Logo} alt="logo" className='w-full my-14' /> 

			<div className='w-full mt-28'>
				<p className="text-lima text-2xl text-center">
          Mañana seguimos ayudando a nuestro planeta!
				</p>

				<img
					className='w-28 mx-auto my-8'
					src='/assets/icons8-reloj-64.png'
					alt='icono reloj'
				/>
			</div> 


		</section>
	)
}
export default TimesUp