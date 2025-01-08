import { useNavigate } from 'react-router-dom'
import Rombo from './Rombo'

const HeaderGame = () => {
	const navigate = useNavigate()

	return (
		<header className='flex text-end px-6'>

			<Rombo
				textContent={
					<button 
						onClick={() => navigate(-1)}
						className='flex items-center'
					>
						<img src="/assets/icons8-galón-izquierdo-64.png" className="w-14" />
					</button>
				}
				font='xs'
				size='xs'
				bg='lima'
				className='absolute right-0'		
			/>
		</header>
	)
}
export default HeaderGame