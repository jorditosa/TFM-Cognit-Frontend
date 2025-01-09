import { Outlet, useLocation } from 'react-router-dom'
import ProfileView from '../profile/ProfileView'

const DashboardProfile = () => {
		const location = useLocation();
		const user = location.state;
		console.log(user)

	return (
		<section className="h-screen">
      
			<ProfileView user={user} />

			<Outlet />
      
		</section>
	)
}
export default DashboardProfile