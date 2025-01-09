import { Link, useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import { useForm, SubmitHandler } from "react-hook-form"
import { t } from 'i18next'
import { loginUser } from "../../actions/login"
import { CircleLoader } from "react-spinners"
import { usePlayerStore } from "../../store"

type Inputs = {
  username: string
  email: string
  password: string
}

export default function Login() {
  const setUser = usePlayerStore(state => state.setPlayer)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await loginUser(data)
    
    // Set user state and redirect
    setUser(res.user)

    navigate("/dashboard")
  }

  return (
    <form
      className="mt-6 max-w-md mx-auto w-full"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >

      <div className="flex flex-col pb-2 m-0">
        <label
          htmlFor="email"
          className="block overflow-hidden rounded-md py-1 focus-within:border-secondary "
        >
          <span className="inline-block text-lima uppercase pb-2">
            {t('register_input_email_label')}
          </span>

          <input
            type="email"
            id="email"
            placeholder={t('login_input_email_placeholder')}
            className={`${errors.email ? 'border-danger' : 'border-none'} bg-light mb-2 w-full border-2 p-2 rounded focus:border-transparent focus:outline-none focus:ring-0 text-dark focus-within:ring-1 focus-within:ring-secondary`}
            {...register("email",
              {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: t('register_input_email_error'),
                },
              }
            )}
          />
        </label>
        {errors.email && <small className='text-danger'>{t('register_input_email_error')} </small>}
      </div>

      <div className="flex flex-col pb-2 m-0">
        <label
          htmlFor="password"
          className="block overflow-hidden rounded-md py-1 focus-within:border-secondary "
        >
          <span className="inline-block text-lima uppercase pb-2">
            {t('login_input_password_label')}
          </span>

          <input
            type="password"
            id="password"
            placeholder={t('login_input_password_placeholder')}
            className={`${errors.password ? 'border-danger' : 'border-none'} bg-light mb-2 w-full border-2 p-2 rounded focus:border-transparent focus:outline-none focus:ring-0 text-dark focus-within:ring-1 focus-within:ring-secondary`}
            {...register("password",
              {
                required: true,
                minLength: {
                    value: 8,
                    message: t('register_input_password_error_length'),
                },
            }
            )}
          />
        </label>
        {errors.password && <small className='text-danger'>{t('register_input_password_error')} </small>}
      </div>

      <div className="py-6 flex justify-between">
        {
          isSubmitting
            ? (<CircleLoader color="#ffffff" />)
            : (
              <Button
                text="Iniciar sessió"
                type="submit"
              />
            )
        }
        <Link
          to="/"
          className="text-lima hover:text-lima/80"
        >
          {t('back_btn')}
        </Link>
      </div>

      <Link
        to="/register"
        className="block text-lima hover:text-lima/80 pt-2"
      >
        {t('to_register_page')}
      </Link>

    </form>
  )
}
