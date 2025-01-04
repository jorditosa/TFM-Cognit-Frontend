import { Input } from "../../components/Input"
import Button from "../../components/Button"
import { useForm, SubmitHandler } from "react-hook-form"

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
    const onSubmit: SubmitHandler<Inputs> = data => register(data)

    return (
        <form
            className="mt-6"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
        >

            {errors.username && <span className="text-danger">This field is required</span>}
            <Input
                type="text"
                placeholder="El teu nom"
                label="El teu nom complet"
                {...register("username",
                    { required: true }
                )}
            />

            {errors.email && <span className="text-danger">This field is required</span>}
            <Input
                type="email"
                placeholder="El teu email"
                label="El teu email"
                {...register("email",
                    { required: true }
                )}
            />

            {errors.password && <span className="text-danger">This field is required</span>}

            <Input
                type="password"
                placeholder="Password"
                label="La teva contrasenya"
                {...register("password",
                    { required: true }
                )}
            />

            <div className="py-6">
                <Button
                    text="Registrar-se"
                    type="submit"
                />
            </div>

        </form>
    )
}
