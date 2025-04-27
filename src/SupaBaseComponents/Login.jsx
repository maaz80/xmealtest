import React, { useState } from 'react'
import { supabase } from '../supabase-client'

const Login = () => {
    const [isSignup, setIsSignup] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (isSignup) {
            const { error: SignupError } = await supabase.auth.signUp({ email, password })
            if (SignupError) {
                console.log(SignupError)
                return
            }
        }
        else {
            const { error: LoginError } = await supabase.auth.signInWithPassword({ email, password })
            if (LoginError) {
                console.log(LoginError)
                return
            }

        }
    }
    return (
        <div>
            {isSignup ? (
                <div>
                    <h1>Signup</h1>
                    <form action="" onSubmit={handleSubmit}>
                        <input type="text" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
                        <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
                        <button type="submit">Signup</button>
                    </form>
                    <button onClick={() => setIsSignup(false)}>Login</button>
                </div>
            ) : (
                <div>
                    <h1>Login</h1>
                    <form action="" onSubmit={handleSubmit}>
                        <input type="text" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
                        <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
                        <button type="submit">Login</button>
                    </form>
                    <button onClick={() => setIsSignup(true)}>Signup</button>
                </div>
            )}

        </div>
    )
}

export default Login