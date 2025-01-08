import { Outlet } from 'react-router-dom'
import ProfileView from '../profile/ProfileView'

const DashboardProfile = () => {

	return (
		<section className="h-screen">
      
			<ProfileView />

			<Outlet />
      
		</section>
	)
}
export default DashboardProfile