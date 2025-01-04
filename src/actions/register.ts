import { User } from "../interfaces/user-interfaces"

export const register = async (data: User) => {
     // Register user
     const url = `${process.env.API_URL}/auth/create-account`
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

     console.log(req)
}