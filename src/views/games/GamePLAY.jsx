import { animated, useSpring } from '@react-spring/web';
import { t } from "i18next";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GAMES_CODE } from "../../constants/constants";
import { getPlayingGame } from "../../services/gamesService";


const GamePLAY = () => {
  const [game, setGame] = useState('')
  const location = useLocation();
  const animate = true
  const props = useSpring({
    from: {
      opacity: 0,
      transform: 'scale(0.2) rotate(0deg)',
      color: 'red', // Puedes cambiar el color aquí
    },
    to: {
      opacity: animate ? 1 : 0,
      transform: animate ? 'scale(1) rotate(360deg)' : 'scale(0.8) rotate(0deg)',
      color: animate ? 'blue' : 'red', // Puedes cambiar el color aquí
    },
    config: { duration: 750 },
  });
  const handleFinishedGame = () => {
    console.log('finished game')
  }


  useEffect(() => {
    (async () => {
      const type = location.pathname.split('/')[location.pathname.split('/').length - 1]
      const games = await getPlayingGame(GAMES_CODE[type]);
      // Random game
      const game = games[Math.floor(Math.random() * games.length)];

      setGame(game)
    })()
  }, [])

  return (
    <>
      {
        game &&
        <animated.div
          style={props}
          className="container mt-32 w-full flex flex-col items-center px-8">
          <h1 className="text-lima text-2xl">{game.game_title}</h1>

          <p className="mt-4 text-lima">
            {game.game_description}
          </p>

          <button
            className="block mt-14 py-2 w-full rounded-md border-lima-200 shadow-sm text-lima bg-blue border-4 border-lima text-3xl"
            onClick={handleFinishedGame}
          >
            {t('game_action_cta')}
          </button>

        </animated.div>
      }
    </>
  )
}
export default GamePLAY