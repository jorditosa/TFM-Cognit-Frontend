import { PropTypes } from "prop-types"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { updateUserInfo } from "../services/userService"
import { setCurrentGame } from "../store/games/games.slice"
import { addPoints, addSkillPoints } from "../store/users/users.slice"

const ValidationCard = ({game}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { game_points_reward: points, game_skill_points_reward: skill_points, game_reward_type: skill } = game

  const handleGetRewards = async () => {
    console.log(skill)
    // Adding point to user
    dispatch(addPoints(Number(points)))
    // Adding skill to user
    dispatch(addSkillPoints({skill_points, skill}))

    // Updating info on Database
    await updateUserInfo({user_points: points, skill_know_points: skill_points, skill_sust_points: skill_points, skill_prot_points: skill_points})

    // Reset games
    dispatch(setCurrentGame(null))

    // Redirect
    navigate('/dashboard')
  }

  return (
    <section className="absolute max-w-xl m-auto top-2 left-2 right-2 bottom-2 bg-dark border-4 border-aqua text-lima rounded-3xl shadow-4xl">
      <div className="p-8 text-center sm:p-12">
        <p className="text-4xl font-semibold tracking-widest mt-8">
          Enhorabona!
        </p>

        <h2 className="mt-8 text-2xl font-bold">Has superat el joc, has obtingut la següent recompensa:</h2>

        <div className="flex items-center justify-center mt-8 text-4xl text-lima gap-4">
          <span>{points}</span>
          <img src="/assets/icons8-comida-natural-64.png" alt="point icon" />
        </div>

        <div className="flex items-center justify-center mt-8 text-4xl text-lima gap-4">
          <span>{skill_points}</span>
          Punt d&#39;habilitat
        </div>

        <button
          className="block mt-14 py-2 w-full rounded-md border-lima-200 shadow-lg shadow-aqua text-lima bg-blue border-4 border-lima text-3xl"
          onClick={handleGetRewards}
        >
          Som-hi!
        </button>
      </div>
    </section>
  )
}

ValidationCard.propTypes = {
  game: PropTypes.object
}

export default ValidationCard