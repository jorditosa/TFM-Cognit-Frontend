import { Outlet, useLocation } from "react-router-dom"
import HeaderBackBtn from "../../components/HeaderBackBtn"
import ProfileView from "./ProfileView"

const Profile = () => {
  const location = useLocation()

  return (
    <section id="profile-page" className="h-full">
      
      <HeaderBackBtn />

      {location.pathname === '/profile' && <ProfileView />}

      <Outlet />
      
    </section>
  )
}
export default Profile