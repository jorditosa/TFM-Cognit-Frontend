import { Outlet } from 'react-router-dom'
import HeaderGame from '../../components/HeaderGame'

const GameLayout = () => {

	return (
		<section id="game-page" className='overflow-hidden w-full h-screen border-[10px] border-lima'>

			<HeaderGame />

			<Outlet />
		</section>
	)
}
export default GameLayout