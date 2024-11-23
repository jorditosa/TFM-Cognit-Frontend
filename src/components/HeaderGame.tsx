import React from 'react'
import { useNavigate } from 'react-router-dom'
import Rombo from './Rombo'

const HeaderGame = () => {
	const navigate = useNavigate()

	return (
		<header className='relative flex justify-between px-6'>

			<Rombo
				textContent={
					<button 
						onClick={() => navigate(-1)}
						className='flex items-center'
					>
						<img src="/assets/icons8-galón-izquierdo-64.png" className="w-14" />
					</button>
				}
				font='sm'
				size='sm'
				className='absolute -right-8 -top-4'
			/>
		</header>
	)
}
export default HeaderGame