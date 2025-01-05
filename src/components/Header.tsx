import PropTypes from 'prop-types'
import Rombo from './Rombo'
import Logo from '/assets/logo-no-background.svg'
import { useNavigate } from 'react-router-dom'

const Header = () => {
	const navigate = useNavigate()

	return (
		<header className='w-full flex justify-between items-center p-4'>
			<img src={Logo} alt="logo" className='w-24 my-6 reflect' />

			<div className='flex gap-4'>
				<Rombo
					textContent={
						<div className='flex items-center gap-1'>
							<span className='text-lg text-lima font-bold italic'>10</span>
							<img src="/assets/icons8-comida-natural-64.png" className="w-8" />
						</div>
					}
					font='xs'
					size='xs'
				/>

<Rombo
					textContent={
						<button 
							onClick={() => navigate('/dashboard/general-info')}
							className='flex items-center w-full'
						>
							<img src="/assets/icons8-ayuda-50.png" alt="help icon" />
						</button>
					}
					font='xs'
					size='xs'
				/>

				<Rombo
					textContent={
						<button
							onClick={() => navigate(-1)}
							className='flex items-center w-full'
						>
							<img src="/assets/icons8-galón-izquierdo-64.png" className="w-full p-4" />
						</button>
					}
					font='xs'
					size='xs'
				/>
			</div>
		</header>
	)
}

Header.propTypes = {
	user: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.string,
	]),
}

export default Header