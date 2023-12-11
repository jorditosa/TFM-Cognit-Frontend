import { useState } from "react"
import HeaderBackBtn from "../../components/HeaderBackBtn"
import Rombo from "../../components/Rombo"
import { Regex } from "../../constants/regex"

const GameCHECK = () => {
  const [checkCode, setCheckCode] = useState('')
  const [ msg, setMsg ] = useState('')

  const handleValidation = () => {
    setMsg('')
    
    // 1. Check code pattern
    if(!Regex.CODE_VALIDATION.test(checkCode)) {
      setMsg('El format del Codi incorrecte')
      return
    }
  }

  return (
    <section id="game-page" className='w-full h-screen'>

      <HeaderBackBtn />

      <div className="container mt-4 w-full flex flex-col items-center">

          <div className="flex flex-col items-center gap-4 mt-24">
            <label htmlFor="UserEmail" className="block text-lima text-3xl font-medium text-lima-700">
              Validació!
            </label>
            <input
              id="UserEmail"
              name="UserEmail"
              type="email"
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
              className="relative -bottom-48 left-32"
              textContent={
                <img src="/assets/icons8-de-acuerdo-64.png" className="w-40" />
              }
              font="xl"
              size='xl'
            />
          </button>

      </div>
    </section>

  )
}
export default GameCHECK