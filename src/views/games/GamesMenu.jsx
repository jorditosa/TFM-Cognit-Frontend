import { animated } from '@react-spring/web'
import { t } from "i18next"
import { Suspense } from "react"
import { Link } from 'react-router-dom'
import { CircleLoader } from 'react-spinners'
import HeaderBackBtn from "../../components/HeaderBackBtn"
import Legend from '../../components/Legend'
import Rombo from "../../components/Rombo"
import useFadeInAnimation from "../../hooks/useFadeInAnimation"
import useGamesInfo from '../../hooks/useGamesInfo'

const GamesMenu = () => {
  const props = useFadeInAnimation();
  useGamesInfo()

  return (
    <Suspense fallback={<CircleLoader color="#086375" size={25} />}>
      <section id="game-page" className='overflow-hidden w-full'>

        <HeaderBackBtn />
        
        <animated.div
          style={props}
          className='h-screen'
        >
          <div className="container mt-4 w-full flex flex-col items-center">
            <h1 className="text-lima text-3xl my-2">
              {t('games_menu_heading')}
            </h1>

            <p className="text-lima text-3xl my-2">
              {t('games_menu_subheading')}
            </p>

            <div className="relative mt-6">
              <Link to='/games/l/water'>
                <Rombo
                  className="absolute top-0 -left-14"
                  textContent={
                    <img src="/assets/icons8-agua-64.png" className="w-16" />
                  }
                  font="md"
                  size='sm'
                />
              </Link>
              <Link to='/games/l/recycling'>
                <Rombo
                  className="absolute top-24 right-8"
                  textContent={
                    <img src="/assets/icons8-reciclaje-64.png" className="w-16" />
                  }
                  font="md"
                  size='sm'
                />
              </Link>
              <Link to='/games/l/flora'>
                <Rombo
                  className="absolute top-48 -left-14"
                  textContent={
                    <img src="/assets/icons8-árbol-de-hoja-caduca-64.png" className="w-16" />
                  }
                  font="md"
                  size='sm'
                />
              </Link>
              <Link to='/games/l/fauna'>
                <Rombo
                  className="absolute top-24 left-8"
                  textContent={
                    <img src="/assets/icons8-perro-64.png" className="w-16" />
                  }
                  font="md"
                  size='sm'
                />
              </Link>
            </div>
          </div>

        </animated.div>

        <Legend />
        
      </section>
    </Suspense> 
  )
}
export default GamesMenu