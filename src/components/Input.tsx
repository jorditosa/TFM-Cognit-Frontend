
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
                className="block bg-light overflow-hidden rounded-md px-3 py-1 shadow-sm focus-within:border-secondary focus-within:ring-1 focus-within:ring-secondary"
            >
                <span className="text-dark font-bold uppercase"> {label} </span>

                <input
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    className="mb-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 bg-light text-dark"
                />
            </label>
        </div>
    )
}