import React from 'react'
import { useNavigate } from 'react-router-dom'
import Rombo from './Rombo'
import Logo from '/assets/logo-no-background.svg'

const Header = () => {
	const navigate = useNavigate()

	return (
		<header className='relative flex justify-between px-6'>
			<img src={Logo} alt="logo" className='w-24 my-6 reflect' />

			<Rombo
				textContent={
					<button 
						onClick={() => navigate(-1)}
						className='flex items-center w-full'
					>
						<img src="/assets/icons8-galón-izquierdo-64.png" className="w-full p-4" />
					</button>
				}
				font='sm'
				size='sm'
				className='absolute -right-8 -top-4'
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
				className='absolute right-24 -top-0'
			/>
		</header>
	)
}
export default Header