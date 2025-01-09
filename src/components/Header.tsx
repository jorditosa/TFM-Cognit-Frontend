import PropTypes from 'prop-types'
import Rombo from './Rombo'
import Logo from '/assets/logo-no-background.svg'
import { useNavigate } from 'react-router-dom'
import { ENDPOINT } from '../constants/endpoints';
import { FaInfoCircle, FaChevronLeft } from "react-icons/fa";
import { PiPlant } from "react-icons/pi";
import { UserCookie } from '@/interfaces/user-interfaces';
import { logout } from '../actions/logout';
import { IoMdLogOut } from "react-icons/io";

interface Props {
	user: UserCookie
}

const Header = ({user}: Props) => {
	const navigate = useNavigate()

	return (
		<header className='w-full flex justify-between items-center p-4'>
			<img src={Logo} alt="logo" className='w-24 my-6 reflect' />

			<div className='flex gap-6'>
				<Rombo
					textContent={
						<div className='flex items-center gap-1'>
							<span className='text-lg text-lima font-bold italic'>{user.points || 0}</span>
							<PiPlant size={30} className='text-lima'/>
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
				<Rombo
					textContent={
						<button
							onClick={() => logout()}
							className='flex items-center w-full text-lima'
						>
							<IoMdLogOut size={52} />
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