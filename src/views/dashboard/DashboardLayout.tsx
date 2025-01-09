import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import { useCookies } from "react-cookie";

export default function DashboardLayout() {
  const [cookies] = useCookies(['COGNIT_USER'])
	const user = cookies.COGNIT_USER || {};

  return (
    <main id="dashboard-page" className='overflow-hidden w-full'>
      <Header user={user} />

      <Outlet />
    </main>
  )
}
