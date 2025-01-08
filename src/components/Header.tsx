import PropTypes from 'prop-types'
import Rombo from './Rombo'
import Logo from '/assets/logo-no-background.svg'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import { ENDPOINT } from '../constants/endpoints';
import { FaInfoCircle, FaChevronLeft } from "react-icons/fa";

const Header = () => {
	const navigate = useNavigate()
	const [cookies] = useCookies(['COGNIT_USER'])
	const user = cookies.COGNIT_USER || {};

	return (
		<header className='w-full flex justify-between items-center p-4'>
			<img src={Logo} alt="logo" className='w-24 my-6 reflect' />

			<div className='flex gap-4'>
				<Rombo
					textContent={
						<div className='flex items-center gap-1'>
							<span className='text-lg text-lima font-bold italic'>{user.points || 0}</span>
							<img src="/assets/icons8-comida-natural-64.png" className="w-8" />
						</div>
					}
					font='xs'
					size='xs'
					bg='blue'
				/>

				<Rombo
					textContent={
						<button
							onClick={() => navigate(ENDPOINT.info)}
							className='flex items-center w-full text-lima'
						>
							<FaInfoCircle size={52} />
						</button>
					}
					font='xs'
					size='xs'
					bg='lima'
				/>

				<Rombo
					textContent={
						<button
							onClick={() => navigate(-1)}
							className='flex items-center w-full text-lima'
						>
							<FaChevronLeft size={52} />
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

Header.propTypes = {
	user: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.string,
	]),
}

export default Header