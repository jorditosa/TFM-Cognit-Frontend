import { Link } from "react-router-dom"
import { createAccount } from "../../actions/register"
import Button from "../../components/Button"
import { useForm, SubmitHandler } from "react-hook-form"
import { t } from 'i18next'

type Inputs = {
    username: string
    email: string
    password: string
}

export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = data => createAccount(data)

    return (
        <form
            className="mt-6 max-w-lg mx-auto"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
        >

            <div className="flex flex-col pb-2 m-0">
                <label
                    htmlFor="username"
                    className="block overflow-hidden rounded-md py-1 focus-within:border-secondary "
                >
                    <span className="inline-block text-lima uppercase pb-2"> 
                        {t('register_input_name_label')}
                    </span>

                    <input
                        type="text"
                        id="username"
                        placeholder={t('register_input_name_placeholder')} 
                        className={`${errors.username ? 'border-danger' : 'border-none' } bg-light mb-2 w-full border-2 p-2 rounded focus:border-transparent focus:outline-none focus:ring-0 text-dark focus-within:ring-1 focus-within:ring-secondary`}
                        {...register("username",
                            { required: true }
                        )}
                    />
                </label>
            </div>

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
                        placeholder={t('register_input_email_placeholder')} 
                        className={`${errors.email ? 'border-danger' : 'border-none' } bg-light mb-2 w-full border-2 p-2 rounded focus:border-transparent focus:outline-none focus:ring-0 text-dark focus-within:ring-1 focus-within:ring-secondary`}
                        {...register("email",
                            { required: true }
                        )}
                    />
                </label>
            </div>

            <div className="flex flex-col pb-2 m-0">
                <label
                    htmlFor="password"
                    className="block overflow-hidden rounded-md py-1 focus-within:border-secondary "
                >
                    <span className="inline-block text-lima uppercase pb-2"> 
                        {t('register_input_password_label')}     
                    </span>

                    <input
                        type="password"
                        id="password"
                        placeholder={t('register_input_password_placeholder')} 
                        className={`${errors.password ? 'border-danger' : 'border-none' } bg-light mb-2 w-full border-2 p-2 rounded focus:border-transparent focus:outline-none focus:ring-0 text-dark focus-within:ring-1 focus-within:ring-secondary`}
                        {...register("password",
                            { required: true }
                        )}
                    />
                </label>
            </div>

            <div className="py-6 flex justify-between">
                <Button
                    text={t('register_title')}
                    type="submit"
                />
                  <Link
                    to="/"
                    className="text-lima hover:text-lima/80"
                >
                     {t('back_btn')} 
                </Link>
            </div>

            <Link
          to="/"
          className="block text-lima hover:text-lima/80 pt-2"
        >
          {t('to_login_page')}
        </Link>

        </form>
    )
}
