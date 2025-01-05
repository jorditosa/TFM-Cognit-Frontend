import { User } from "../interfaces/user-interfaces"

export const createAccount = async (data: User) => {
    // Register user
    const url = `${import.meta.env.VITE_API_URL}auth/create-account`
    const req = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: data.username,
            email: data.email,
            password: data.password,
        })
    })

    if (req.ok) {
        window.location.href = '/dashboard';
    } else {
        const errorData = await req.json();
        console.error('Error en la creación de la cuenta:', errorData.message);
    }
}