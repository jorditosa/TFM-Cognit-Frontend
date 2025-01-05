import { Link } from "react-router-dom"
import Button from "../../components/Button"
import { useForm, SubmitHandler } from "react-hook-form"
import { confirmAccount } from "../../actions/confirm-account"

type Inputs = {
    token: string
}

export default function ConfirmAccount() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = data => confirmAccount(data)

    return (
        <form
            className="mt-6 max-w-lg mx-auto"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
        >
            <p className="text-lima pb-6">
                Hauràs rebut un codi al teu email, siusplau introdueix-lo aqui per confirmar el teu usuari i començar a gaudir de Cognit.
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
                        className={`${errors.token ? 'border-danger' : 'border-none' } bg-light mb-2 w-full border-2 p-2 rounded focus:border-transparent focus:outline-none focus:ring-0 text-dark focus-within:ring-1 focus-within:ring-secondary`}
                        {...register("token",
                            { required: true }
                        )}
                    />
                </label>
            </div>          

            <div className="py-6 flex justify-between">
                <Button
                    text="Confirmar compte"
                    type="submit"
                />
                  <Link
                    to="/"
                    className="text-lima hover:text-lima/80"
                >
                    Enrere
                </Link>
            </div>

        </form>
    )
}
