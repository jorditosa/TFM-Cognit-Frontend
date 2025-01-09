import PropTypes from 'prop-types'
import Rombo from './Rombo'
import Logo from '/assets/logo-no-background.svg'
import { useNavigate } from 'react-router-dom'
import { ENDPOINT } from '../constants/endpoints';
import { FaInfoCircle, FaChevronLeft } from "react-icons/fa";
import { PiPlant } from "react-icons/pi";
import { IoMdLogOut } from "react-icons/io";
import { usePlayerStore } from '../store';

const Header = () => {
	const navigate = useNavigate()
	const deleteUser = usePlayerStore(state => state.deletePlayer)
	const player = usePlayerStore(state => state.player)

	const handleLogout = () => {
		// Delete user state
		deleteUser()

		// Redirect
		navigate("/")
	}

	return (
		<header className='w-full flex justify-between items-center p-4'>
			<img src={Logo} alt="logo" className='w-24 my-6 reflect' />

			<div className='flex gap-6'>
				<Rombo
					textContent={
						<div className='flex flex-col items-center'>
							<span className='text-lg text-lima font-bold italic'>{player!.points || 0}</span>
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
							onClick={handleLogout}
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