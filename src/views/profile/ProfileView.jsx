import { animated } from "@react-spring/web"
import { t } from 'i18next'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import Rombo from "../../components/Rombo"
import useFadeInAnimation from "../../hooks/useFadeInAnimation"
import { selectUser } from "../../store/users/users.slice"

const ProfileView = () => {
  const props = useFadeInAnimation();
  const user = useSelector(selectUser);
  const { user_points, user_email, user_city } = user;
  
  return (
    <animated.div
      style={props}
      className='h-screen'
    >
      <div className="container mt-4 w-full flex flex-col items-center">
        <h1 className="text-lima text-3xl my-2">
          {t('profile_heading')}
        </h1>

        <div className="relative mt-6">
          <Rombo
            className="absolute top-0 -left-14"
            textContent={
              <div className='flex items-center gap-2'>
                <span className="text-xl">{user_points}</span>
                <img src="/assets/icons8-comida-natural-64.png" className="w-12" />
              </div>
            }
            font='sm'
            size='sm'
          />
          <Link to='/profile/about'>
            <Rombo
              className="absolute top-24 right-8"
              textContent={
                <p className="text-center">
                  {t('profile_cta_about')}
                </p>
              }
              font="md"
              size='sm'
            />
          </Link>
          <Link to='/profile/info'>
            <Rombo
              className="absolute top-48 -left-14"
              textContent={
                <p className="text-center">
                  {t('profile_cta_info')}
                </p>
              }
              font="md"
              size='sm'
            />
          </Link>
          <Link to='/profile/skills'>
            <Rombo
              className="absolute top-24 left-8"
              textContent={
                <p className="text-center">
                  {t('profile_cta_skills')}
                </p>
              }
              font="md"
              size='sm'
            />
          </Link>
        </div>
      </div>

      <div className="container mt-80 pt-4 w-full flex flex-col items-center">
        <h2 className="text-lima text-3xl my-2">
          {t('profile_subheading_email')}
        </h2>  
        <hr />
        <p className="text-xl text-center text-lima">{user_email}</p>
      </div>

       <div className="container mt-10 pt-4 w-full flex flex-col items-center">
        <h2 className="text-lima text-3xl my-2">
          {t('profile_subheading_city')}
        </h2>  
        <hr />
        <p className="text-xl text-center text-lima">{user_city}</p>
      </div>
         
    </animated.div>
  )
}
export default ProfileView