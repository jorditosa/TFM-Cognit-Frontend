import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function DashboardLayout() {
  const navigate = useNavigate()
  const { user } = useKindeAuth();
  
  useEffect(() => {
    if(!user) navigate("/")
  }, [user, navigate])

  return (
    <div>
        <Outlet />
    </div>
  )
}
