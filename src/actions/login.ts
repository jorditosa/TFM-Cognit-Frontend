import { User } from "../interfaces/user-interfaces"

export async function loginUser(data: User) {

    const url = `${import.meta.env.VITE_API_URL}auth/login`
    const req = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: data.email,
            password: data.password,
        })
    })

    if (req.ok) {
        window.location.href = '/dashboard';
    } else {
        const errorData = await req.json();
        console.error('Error en la autenticación:', errorData.message);
    }
}