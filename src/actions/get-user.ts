
export const createAccount = async (id: number) => {
    // Register user
    const url = `${import.meta.env.VITE_API_URL}auth/users/${id}`
    const req = await fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        },
    })

    if (req.ok) {
        window.location.href = '/confirm-account';
    } else {
        const errorData = await req.json();
        console.error('Error en la creación de la cuenta:', errorData.message);
    }
}