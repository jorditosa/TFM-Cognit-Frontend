import { Outlet, useLocation } from 'react-router-dom'
import HeaderGame from '../../components/HeaderGame'

const GameLayout = () => {
	const location = useLocation();

	return (
		<section id="game-page" className='overflow-hidden w-full h-screen border-[10px] border-lima'>

			{!location.pathname.includes('games/l/success') && <HeaderGame />}

			<Outlet />
		</section>
	)
}
export default GameLayout