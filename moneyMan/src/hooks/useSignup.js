import { useState } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"


export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const signup = async (email, password, displayName) => {
        setError(null)
        setIsPending(true)

      try {
        // sign up user:
        const res = await projectAuth.createUserWithEmailAndPassword(email, password)
        
        if(!res) {
            throw new Error('Could not complete signup')
        }
        
        await res.user.updateProfile({ displayName })

        //dispatch login action

        setIsPending(false)
        setError(null)
      }  
      catch(err) {
        console.log(err.message)
        setError(err.message)
        setIsPending(false)
      }
    }
return {error, isPending, signup}
}