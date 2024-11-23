import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { t } from 'i18next'
import { CircleLoader } from "react-spinners"


type Inputs = {
	username: string
	password: string
}

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

	const [isLoading, setIsLoading] = useState<boolean>()

	return (
		<section className='container flex flex-col pb-12'>

			<form 
			noValidate
			onSubmit={handleSubmit(onSubmit)}>
				<div className="relative">
					<label htmlFor="username" className="block text-lima font-medium text-lima-700">
						{t('register_input_name_label')}
					</label>
					<input
						id="username"
						type="text"
						placeholder={t('register_input_name_placeholder')}
						className="form-input"
						{...register("username")}
					/>
					{errors.username && <p className="text-danger text-md py-1">{t('register_input_name_error')}</p>}
				</div>

				<div className="relative">
					<label htmlFor="password" className="block text-lima font-medium text-lima-700">
						{t('register_input_password_label')}
					</label>
					<input
						id="password"
						type="password"
						placeholder={t('register_input_password_placeholder')}
						className="form-input"
						{...register("password")}
					/>
					{errors.password && <p className="text-danger text-md py-1">{t('register_input_email_error')}</p>}
				</div>

				<button
					type="submit"
					className="mt-3 py-2 text-xl w-full flex justify-center rounded-md border-blue-200 shadow-sm shadow-mint text-blue bg-lima placeholder:text-blue uppercase ring-0 disabled:bg-lima/50"
				>
					{
						isLoading
							? <CircleLoader color="#086375" size={25} />
							: `${t('login_cta_btn')}`
					}
				</button>
			</form>
		</section>
	)
}

export default Login