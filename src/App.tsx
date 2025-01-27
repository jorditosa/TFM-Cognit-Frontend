import { Outlet } from 'react-router-dom'
import Logo from '/assets/logo-no-background.svg'
function App() {

	return (
		<section id='home-page' className='h-full flex flex-col items-center min-h-screen'>
			<img src={Logo} alt="logo" className='w-full my-8 max-w-sm px-12' />
			<div className="container relative flex flex-col items-center">
				<Outlet />
			</div>
		</section>
	)
}

export default App
