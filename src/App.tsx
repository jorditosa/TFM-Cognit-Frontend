import { Outlet } from 'react-router-dom'
import Logo from '/assets/logo-no-background.svg'
function App() {

	return (
		<section id='home-page' className='h-full flex flex-col items-center min-h-screen'>
			<img src={Logo} alt="logo" className='w-full my-14 max-w-lg px-4' />
			<div className="container relative flex flex-col items-center">
				<Outlet />
			</div>
		</section>
	)
}

export default App
