import { t } from 'i18next';
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { CircleLoader } from 'react-spinners';
import { v4 as uuid } from 'uuid';
import { STATUS_CODE } from "../../constants/constants";
import { Regex } from "../../constants/regex";
import UserModel from "../../models/UserModel";
import { createUser } from "../../services/userService";
import { selectUser } from '../../store/users/users.slice';
import { setCookie } from "../../utils/Cookies";

const Register = () => {
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [legalAge, setLegalAge] = useState(false)
  const [isValidEmail, setIsValidEmail] = useState(true)
  const [isValidCity, setIsValidCity] = useState(true)
  const [isValidLegalAge, setIsValidLegalAge] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [msg, setMsg] = useState('')
  const navigate = useNavigate()
  const userLogged = useSelector(selectUser)

  useEffect(() => {
    if (userLogged) {
      navigate('/dashboard')
    }
  }, []);

  const handleRegistration = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMsg('')

    // Validations
    const isValidEmail = Regex.EMAIL.test(email)
    const isValidCity = email.length >= 3
    const isValidLegalAge = legalAge

    if (!isValidEmail) {
      setIsValidEmail(false)
      setIsLoading(false)
      return
    }

    if (!isValidCity) {
      setIsValidCity(false)
      setIsLoading(false)
      return
    }

    if (!isValidLegalAge) {
      setIsValidLegalAge(false)
      setIsLoading(false)
      return
    }

    // Generating the object to be sent to the backend
    const user = {
      ...UserModel,
      user_status: uuid(),
      user_email: email,
      user_code_validation: uuid().slice(0, 6).replace(/(\d{3})(\d{3})/, '$1-$2'),
      user_city: city,
    }

    if (isValidEmail && isValidLegalAge) {
      try {
        const res = await createUser(user);
        if (res === STATUS_CODE.CREATED) {
          setCookie(user)
          navigate('/')
        } else {
          setMsg(t('error_msg_userAlreadyCreated'))
        }
        setIsLoading(false)

      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <section className='container px-4 flex flex-col justify-center items-center'>
      <div>
        <p className="text-lima text-sm md:text-base mb-2">
          {t('register_explanation_1')}
        </p>
        <p className="text-lima text-sm md:text-base mb-2">
          {t('register_explanation_2')}
        </p>
      </div>

      <form
        className='w-full mt-6 flex flex-col justify-center gap-4'
        noValidate
        onSubmit={e => handleRegistration(e)}
      >
        <div className="relative">
          <label htmlFor="UserEmail" className="block text-lima font-medium text-lima-700">
            {t('register_input_email_label')}
          </label>
          <input
            id="UserEmail"
            name="UserEmail"
            type="email"
            placeholder={t('register_input_email_placeholder')}
            value={email}
            onChange={e => setEmail(e.target.value)}
            className={`${isValidEmail ? 'border-lima shadow-mint' : 'border-danger shadow-danger'} mt-1 py-2 pl-4 w-full rounded-md border-lima-200 shadow-sm text-lima bg-blue border-4  placeholder:text-lima`}
          />
          {!isValidEmail && <p className="text-danger text-md py-1">{t('register_input_email_error')}</p>}
        </div>

         <div className="relative">
          <label htmlFor="UserCity" className="block text-lima font-medium text-lima-700">
            {t('register_input_city_label')}
          </label>
          <input
            id="UserCity"
            name="UserCity"
            type="text"
            placeholder={t('register_input_city_placeholder')}
            value={city}
            onChange={e => setCity(e.target.value)}
            className={`${isValidCity ? 'border-lima shadow-mint' : 'border-danger shadow-danger'} mt-1 py-2 pl-4 w-full rounded-md border-lima-200 shadow-sm text-lima bg-blue border-4  placeholder:text-lima`}
          />
          {!isValidCity && <p className="text-danger text-md py-1">{t('register_input_city_error')}</p>}
        </div>

        <div>
          <div className="flex items-center gap-4">
            <input
              id="checkbox"
              name="checkbox"
              type="checkbox"
              value={legalAge}
              onChange={e => setLegalAge(e.target.checked)}
              className="w-4 h-4 text-lima bg-white border-black rounded focus:ring-lima focus:ring-2 cursor-pointer" />
            <label
              htmlFor="checkbox"
              className="text-sm md:text-base text-lima cursor-pointer"
            >
              {t('register_input_legalAge_label')}
            </label>
          </div>
          {!isValidLegalAge && <p className="text-danger text-md py-1">{t('register_input_legalAge_error')}</p>}
        </div>

        <button
          type="submit"
          className="mt-3 py-2 text-xl w-full flex justify-center rounded-md border-blue-200 shadow-sm shadow-mint text-blue bg-lima placeholder:text-blue uppercase ring-0 disabled:bg-lima/50"
        >
          {
            isLoading
              ? <CircleLoader color="#086375" size={25} />
              : `${t('register_cta_btn')}`
          }
        </button>
        {msg && <p className="text-danger text-md py-1">{msg}</p>}
      </form>

    </section>
  )
}
export default Register