
interface Props {
    name: string;
    type: 'text' | 'email' | 'password' | 'number';
    placeholder: string;
    label: string;
}

export const Input = ({ name, type, placeholder, label }: Props) => {


    return (

        <div className="flex flex-col gap-2 pb-4 m-0">
            <label
                htmlFor={name}
                className="block overflow-hidden rounded-md py-1 focus-within:border-secondary "
            >
                <span className="text-light"> {label} </span>

                <input
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    className="bg-light mb-2 w-full border-none p-2 rounded focus:border-transparent focus:outline-none focus:ring-0 text-dark focus-within:ring-1 focus-within:ring-secondary"
                />
            </label>
        </div>
    )
}