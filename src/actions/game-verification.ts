export async function gameVerification(token: string) {

    const url = `${import.meta.env.VITE_API_URL}auth/users`
    const req = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "include",
        body: JSON.stringify({
            token: token,
        })
    })
    
    console.log(req)
    if(req.ok) {
        return req.json()
    }
}