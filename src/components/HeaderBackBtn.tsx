import { useNavigate } from 'react-router-dom'
import Rombo from './Rombo'
import Logo from '/assets/logo-no-background.svg'
import { IconChevronLeft } from '@tabler/icons-react'

const Header = () => {
	const navigate = useNavigate()

	return (
		<header className='w-full flex justify-between p-2 border-b-4 border-lima'>
			<img src={Logo} alt="logo" className='w-24 my-6 reflect' />

			<div className='flex gap-6'>
				<Rombo
					textContent={<button
						onClick={() => navigate(-1)}
						className='flex items-center w-full'
					>
						<IconChevronLeft size={52} stroke={1} />
					</button>}
					font='xs'
					size='xs' 
					bg='lima'				
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
					bg='lima'
				/>
			</div>

		</header>
	)
}
export default Header