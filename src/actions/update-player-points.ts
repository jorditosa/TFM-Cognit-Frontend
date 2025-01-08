import { User } from "../interfaces/user-interfaces";

export async function updatePlayerPoints(user: User, updatedPoints: string) {

    const url = `${import.meta.env.VITE_API_URL}auth/users/points`
    const req = await fetch(url, {
        method: 'PATCH',
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: user.email,
            points: updatedPoints
        })
    })

    if (req.ok) {
        return req.json()
    } else {
        const errorData = await req.json();
        console.error('Error en actualización de puntos:', errorData.message);
    }
}