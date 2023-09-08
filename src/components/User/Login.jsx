import { useState } from "react";
import { signIn } from "../../utils/api";

function LogIn({onLogin}){
    const [username, setUsername]= useState('')

    const handleLogin = (event) => {
        event.preventDefault()

        signIn(username)
        .then((data)=> {
            onLogin(data)
        })
        .catch((error)=>{

        })
    }
    return (
        <div>
            <h2>Login/Register</h2>
            <form className="login" onSubmit={handleLogin}>
                <label htmlFor="username">Username:</label>
                <textarea
                placeholder="Username"
                id="username"
                value={username}
                onChange= {(event) => setUsername(event.target.value)} ></textarea>
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}

export default LogIn