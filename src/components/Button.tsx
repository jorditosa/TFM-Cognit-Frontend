"use client"

interface Props {
    text: string;
    type?: 'submit'
}

export default function Button({text, type}: Props) {

    return (
        <>
            {/* Base */}
            <button
            type={type}
            className="w-full block font-medium text-dark focus:outline-none focus:ring active:text-lima/75 drop-shadow-lg shadow-aqua"
            >
                <span className="block bg-blue px-8 py-4 font-semibold text-light rounded-md uppercase hover:bg-blue/75 duration-150 ease-in"> {text} </span>
            </button>
        </>
    )
}
