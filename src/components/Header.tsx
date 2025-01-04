import { t } from 'i18next'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import Rombo from './Rombo'
import Logo from '/assets/logo-no-background.svg'
import { useLanguageStore } from '../store'

const Header = ({ user }) => {
	const navigate = useNavigate()
	const language = useLanguageStore(state => state.language)

	return (
		<header className='relative flex justify-between px-6'>
			<img src={Logo} alt="logo" className='w-24 my-6 reflect' />

			<Rombo
				textContent={
					<section className='flex flex-col gap-4'>
						<div className='flex items-center gap-1'>
							<span className='text-lg'>{user?.user_points}</span>
							<img src="/assets/icons8-comida-natural-64.png" className="w-10" />
						</div>
						
						<button 
						onClick={() => navigate('/language')}
						className='flex items-center w-full gap-2'
					>
						<p>
							{t('home_language_btn')}
						</p>
						<p className='uppercase'>
							{language}
						</p>
					</button>

					</section>
				}
				font='sm'
				size='sm'
				className='absolute right-0 top-0'
			/>

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