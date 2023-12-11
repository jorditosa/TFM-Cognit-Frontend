import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getUsers } from "../services/userService"
import { setUser } from "../store/users/users.slice"
import { getCookieTkn } from "../utils/Cookies"

const useGetInfo = () => {
  const [userInfo, setUserInfo] = useState({})
  const dispatch = useDispatch()

  useEffect(() => {
    const getData = async () => {
      const tkn = getCookieTkn()
      if (!tkn) {
        location.pathname = '/'
      } 

      try {
        const userInfo = await getUsers(tkn)
        setUserInfo(userInfo)
        dispatch(setUser(userInfo))
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  },[])
  
  return userInfo
}
export default useGetInfo