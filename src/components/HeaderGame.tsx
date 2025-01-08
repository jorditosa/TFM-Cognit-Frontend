import { useNavigate } from 'react-router-dom'
import Rombo from './Rombo'
import { IconChevronLeft } from '@tabler/icons-react'

const HeaderGame = () => {
	const navigate = useNavigate()

	return (
		<header className='flex text-end px-6'>

			<Rombo
				textContent={
					<button
						onClick={() => navigate(-1)}
						className='flex items-center text-lima'
					>
						<IconChevronLeft size={52} stroke={1} />
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