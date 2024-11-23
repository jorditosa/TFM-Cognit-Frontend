import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
	username: string
	password: string
  }

const Login = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

	

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{/* register your input into the hook by invoking the "register" function */}
			<input defaultValue="test" {...register("username")} />

			{/* include validation with required or other standard HTML validation rules */}
			<input {...register("password", { required: true })} />
			{/* errors will return when field validation fails  */}
			{errors.username && <span>This field is required</span>}

			<input type="submit" />
		</form>
	)
}

export default Login