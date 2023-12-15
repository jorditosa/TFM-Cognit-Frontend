import { animated, useSpring } from '@react-spring/web';
import { t } from "i18next";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom";
import ConfettiComponent from '../../components/Confetti';
import { GAMES_CODE } from "../../constants/constants";
import { getPlayingGame } from "../../services/gamesService";
import { setCurrentGame } from '../../store/games/games.slice';


const GamePLAY = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [game, setGame] = useState('')
  const [openConff, setOpenConff] = useState(false)
  const location = useLocation();
  const animate = true
  const props = useSpring({
    from: {
      opacity: 0,
      transform: 'scale(0.5)',
    },
    to: {
      opacity: animate ? 1 : 0,
      transform: animate ? 'scale(1)' : 'scale(0.9)',
    },
    config: { duration: 750 },
  });

  const handleFinishedGame = () => {
    navigate('/games-check')
  }


  useEffect(() => {
    (async () => {
      const type = location.pathname.split('/')[location.pathname.split('/').length - 1]
      const games = await getPlayingGame(GAMES_CODE[type]);
      // Random game
      const game = games[Math.floor(Math.random() * games.length)];

      setTimeout(() => {
        setOpenConff(true)
      }, 100)

      
      // Setting the game
      dispatch(setCurrentGame(game))
      setGame(game)
    })()
  }, [])

  return (
    <>
      {
        game &&
        <animated.div
          style={props}
          className="bg-blue/5 container reflect mt-40 py-10 w-full flex flex-col justify-center px-8 rounded-lg">
          <span className='text-center text-6xl text-lima'> ⬇⬇  </span>
          <h1 className="text-lima text-3xl rounded-full my-6 text-center"> {game.game_title} </h1>

          <p className="p-2 mt-4 text-lima text-xl">
            {game.game_description} 
          </p>

          <button
            className="block mt-20 py-2 w-full rounded-md border-lima-200 shadow-sm text-lima bg-blue border-4 border-lima text-2xl"
            onClick={handleFinishedGame}
          >
            {t('game_action_cta')}
          </button>

          <ConfettiComponent active={openConff} />

        </animated.div>
      }
    </>
  )
}
export default GamePLAY