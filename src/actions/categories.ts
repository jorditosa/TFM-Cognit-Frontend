export async function getCategories() {

    const url = `${import.meta.env.VITE_API_URL}gameCategory`
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