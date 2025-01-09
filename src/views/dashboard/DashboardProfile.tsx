import { Outlet, useLocation } from 'react-router-dom'
import ProfileView from '../profile/ProfileView'

const DashboardProfile = () => {
		const location = useLocation();
		const {player} = location.state;
		console.log(player)

	return (
		<section className="h-screen">
      
			<ProfileView user={player} />

			<Outlet />
      
		</section>
	)
}
export default DashboardProfile