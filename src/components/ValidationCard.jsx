import { PropTypes } from "prop-types"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addPoints, addSkillPoints } from "../store/users/users.slice"

const ValidationCard = ({game}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { game_points_reward: points, game_skill_points_reward: skill_points, game_reward_type: skill } = game

  const handleGetRewards = () => {
    console.log(skill)
    // Adding point to user
    dispatch(addPoints(Number(points)))
    // Adding skill to user
    dispatch(addSkillPoints({skill_points, skill}))

    // Redirect
    navigate('/dashboard')
  }

  return (
    <section className="absolute top-2 left-2 right-2 bottom-2 bg-dark border-4 border-aqua text-lima rounded-3xl shadow-4xl">
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
          className="mt-8 inline-block w-full rounded-full bg-lima py-4 border-4 border-aqua text-2xl text-dark font-bold shadow-xl shadow-aqua"
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