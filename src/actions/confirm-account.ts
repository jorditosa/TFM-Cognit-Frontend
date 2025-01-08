import { UserToken } from "../interfaces/user-interfaces";

export const confirmAccount = async (token: UserToken) => {
    // Confirm user account
    const url = `${import.meta.env.VITE_API_URL}auth/confirm-account`
    const req = await fetch(url, {
        method: 'POST',
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            token: token.token,
        })
    })

    if (req.ok) {
        window.location.href = '/dashboard';
    } else {
        const errorData = await req.json();
        console.error('Error en la confirmación de la cuenta:', errorData.message);
    }
}

