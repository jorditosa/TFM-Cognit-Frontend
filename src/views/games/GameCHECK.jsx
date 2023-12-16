import { t } from "i18next";
import { useState } from "react";
import { useSelector } from "react-redux";
import HeaderBackBtn from "../../components/HeaderBackBtn";
import Rombo from "../../components/Rombo";
import ValidationCard from "../../components/ValidationCard";
import { Regex } from "../../constants/regex";
import { selectCurrentGame } from "../../store/games/games.slice";
import { selectUser } from "../../store/users/users.slice";


const GameCHECK = () => {
  const [checkCode, setCheckCode] = useState('')
  const [isValidCode, setIsValidCode] = useState(false)
  const [ msg, setMsg ] = useState('')
  const user = useSelector(selectUser)
  const game = useSelector(selectCurrentGame)
  

  const handleValidation = () => {
    setMsg('')
    
    // 1. Check code pattern and length
    if(!Regex.CODE_VALIDATION.test(checkCode) || checkCode.length !== 6) {
      setMsg('El format del Codi és incorrecte')
      return
    }

    // 2. Check validation
    if (checkCode === user.user_code_validation) {
      setIsValidCode(true)
    } else {
      setMsg('La validació no es correcta')
    }
  }

  return (
    <section id="game-page" className='w-full h-screen'>

      {
        isValidCode 
        ? (
          null
        )
        : (
        <HeaderBackBtn />
        )
      }

      <div className={`${isValidCode ? 'hidden' : 'flex'} container mt-10 w-full flex-col items-center`}>
        <h2 className="text-lima text-center text-3xl p-2">
          {t("validation_heading")}
        </h2>
        <p className="text-lima text-center">
           {t("validation_subheading")}
        </p>
          <div className="flex flex-col items-center gap-4 mt-16">
            <input
              id="checkCode"
              name="checkCode"
              type="text"
              value={checkCode}
              onChange={e => setCheckCode(e.target.value)}
              placeholder="Introdueix el codi"
              required
              className="border-lima shadow-mint' mt-1 py-2 w-full rounded-md border-lima-200 shadow-sm text-lima text-center text-2xl bg-blue border-4  placeholder:text-lima"
            />
            {
              msg && <p className="text-danger text-xl">{msg}</p>
            }
          </div>

          <button
          onClick={handleValidation}
          >
            <Rombo
              className="relative -bottom-32"
              textContent={
                <img src="/assets/icons8-de-acuerdo-64.png" className="w-32" />
              }
              font="md"
              size='md'
            />
          </button>
      </div>

      {
        isValidCode && <ValidationCard game={game} />
      }
    </section>

  )
}
export default GameCHECK
