import { useNavigate } from "react-router-dom"
import useSession from "./Auth"
import { ENDPOINT } from "../../constants/endpoints"
import Register from "./Register"

export default function Authentication() {
  const { user, isAuth } = useSession()
  console.log(user)
  const navigate = useNavigate()

  if (isAuth) {
    navigate(ENDPOINT.dashboard);
    return null
  }

  return <Register /> 
}
