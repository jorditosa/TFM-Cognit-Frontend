export async function getGames(category: string) {

    const url = `${import.meta.env.VITE_API_URL}games`
    const req = await fetch(url, {
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        },
    })
    
    if(req.ok) {
        return req.json()
    }
}