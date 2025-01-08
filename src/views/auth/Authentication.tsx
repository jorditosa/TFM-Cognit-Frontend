import { useNavigate } from "react-router-dom"
import { ENDPOINT } from "../../constants/endpoints"
import { useCookies } from "react-cookie"
import { useEffect } from "react"

export default function Authentication() {
  const navigate = useNavigate()
  const [cookies] = useCookies(['COGNIT_USER'])

  useEffect(() => {
    const user = cookies.COGNIT_USER || {};
    if (!user.id) {
      navigate(ENDPOINT.register)
      return
    } else {
      navigate(ENDPOINT.dashboard);
      return
    }

    navigate(ENDPOINT.register)
  }, [cookies.COGNIT_USER, navigate])

  return null;
}
