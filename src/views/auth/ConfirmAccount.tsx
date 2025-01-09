import { Link, useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import { useForm, SubmitHandler } from "react-hook-form"
import { confirmAccount } from "../../actions/confirm-account"
import { t } from 'i18next'
import { CircleLoader } from "react-spinners"
import { usePlayerStore } from "../../store"


type Inputs = {
    token: string
}

export default function ConfirmAccount() {
    const setUser = usePlayerStore(state => state.setPlayer)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {

        const res = await confirmAccount(data);

        // Set user state and redirect
        setUser(res.user)

        navigate("/dashboard")

    }

    return (
        <form
            className="mt-6 max-w-lg mx-auto"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
        >
            <p className="text-lima pb-6">
                {t('register_confirmation')}
            </p>

            <div className="flex flex-col pb-2 m-0">
                <label
                    htmlFor="username"
                    className="block overflow-hidden rounded-md py-1 focus-within:border-secondary "
                >
                    <input
                        type="text"
                        id="token"
                        placeholder="Codi confirmació"
                        className={`${errors.token ? 'border-danger' : 'border-none'} bg-light mb-2 w-full border-2 p-2 rounded focus:border-transparent focus:outline-none focus:ring-0 text-dark focus-within:ring-1 focus-within:ring-secondary`}
                        {...register("token",
                            {
                                required: true,
                                pattern: {
                                    value: /^[0-9A-Za-z]{6}$/,
                                    message: t('register_input_token_error')
                                }
                            }
                        )}
                    />
                </label>
                {errors.token && <small className='text-danger'>{t('register_input_token_error')} </small>}
            </div>

            <div className="py-6 flex justify-between">

                {
                    isSubmitting
                        ? (<CircleLoader color="#ffffff" />)
                        : (
                            <Button
                                text="Confirmar compte"
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

        </form>
    )
}
