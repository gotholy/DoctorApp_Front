import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef()
    const navigate = useNavigate()

    return (
        <main className="flex justify-center items-center h-screen">
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
                <button className="mt-5 w-full btn">Login</button>
            </div>
        </main>
    )
}