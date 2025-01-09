import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

export default function DashboardLayout() {

  return (
    <main id="dashboard-page" className='overflow-hidden w-full'>
      <Header />

      <Outlet />
    </main>
  )
}
