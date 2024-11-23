import { t } from 'i18next'
import { useState } from 'react'
import { CircleLoader } from 'react-spinners'
import { SubmitHandler, useForm } from 'react-hook-form'
import { createUser } from '../../services/userService';
import { useNavigate } from 'react-router-dom';

interface Inputs {
	"username": string;
	"email": string;
	"password": string
}

const Register = () => {
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		setIsLoading(true)

		const resp = await createUser(data)

		if (resp === 201 ) {
			setIsLoading(false)
			navigate("/login")
		}
	}

	const [isLoading, setIsLoading] = useState<boolean>()


	return (
		<section className='container flex flex-col pb-12'>
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
				onSubmit={handleSubmit(onSubmit)}
			>
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
					<label htmlFor="email" className="block text-lima font-medium text-lima-700">
						{t('register_input_email_label')}
					</label>
					<input
						id="email"
						type="email"
						placeholder={t('register_input_email_placeholder')}
						className="form-input"
						{...register("email")}
					/>
					{errors.email && <p className="text-danger text-md py-1">{t('register_input_email_error')}</p>}
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


				{/* <div>
					<div className="flex items-center gap-4">
						<input
							id="checkbox"
							name="checkbox"
							type="checkbox"
							className="w-4 h-4 text-lima bg-white border-black rounded focus:ring-lima focus:ring-2 cursor-pointer" />
						<label
							htmlFor="checkbox"
							className="text-sm md:text-base text-lima cursor-pointer"
						>
							{t('register_input_legalAge_label')}
						</label>
					</div>
					{!isValidLegalAge && <p className="text-danger text-md py-1">{t('register_input_legalAge_error')}</p>}
				</div> */}

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
			</form>

		</section>
	)
}
export default Register