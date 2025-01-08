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
            className="block font-medium text-dark focus:outline-none focus:ring active:text-lima/75 drop-shadow-lg shadow-aqua"
            >
                <span className="block bg-blue py-2 px-4 font-bold text-light rounded hover:bg-blue/75 duration-150 ease-in"> {text} </span>
            </button>
        </>
    )
}
