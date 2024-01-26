import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserLogin() {
    const [notification, setNotification] = useState("");
    const emailRef = useRef();
    const passwordRef = useRef()
    const navigate = useNavigate()

    async function login() {
        const user = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/api/users/userlogin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user),
            credentials: 'include'
        })
        if (response.ok) {
            navigate('/userdashboard')
        }else {
            const result = await response.json();
            setNotification(result.message);
        } 

    }

    return (
        <main className="flex justify-center items-center h-screen ">
            <div className="p-5 pt-1 w-80 rounded-t-xl bg-primary">
                <p className="text-primary-content">Bitte Logge dich ein</p>
                <div>
                    <p className="mt-5 text-xs text-seconary">Deine Email</p>
                    <input ref={emailRef} className="w-full input" type="email" />
                </div>
                <div>
                    <p className="mt-5 text-xs text-seconary">Dein Password</p>
                    <input ref={passwordRef} className="w-full input" type="password" />
                </div>
            {notification && <div className="notification">{notification}</div>}
                <button onClick={login} className="mt-5 w-full btn">Login</button>
            </div>
        </main>
    )
}