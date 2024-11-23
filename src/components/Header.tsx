import { t } from 'i18next'
import PropTypes from 'prop-types'
import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useNavigate } from 'react-router-dom'
import Rombo from './Rombo'
import Logo from '/assets/logo-no-background.svg'

const Header = ({ user }) => {
	const navigate = useNavigate()
	const language = useSelector(state => state.language.language)

	return (
		<header className='relative flex justify-between px-6'>
			<img src={Logo} alt="logo" className='w-24 my-6 reflect' />

			<Rombo
				textContent={
					<div className='flex items-center gap-1'>
						<span className='text-xl'>{user?.user_points}</span>
						<img src="/assets/icons8-comida-natural-64.png" className="w-10" />
					</div>
				}
				font='sm'
				size='sm'
				className='absolute -right-8 -top-4'
			/>

			<Rombo
				textContent={
					<button 
						onClick={() => navigate('/language')}
						className='flex flex-col items-center w-full'
					>
						<p>
							{t('home_language_btn')}
						</p>
						<p className='uppercase'>
							{language}
						</p>
					</button>
				}
				font='xs'
				size='xs'
				className='absolute right-24 -top-0'
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