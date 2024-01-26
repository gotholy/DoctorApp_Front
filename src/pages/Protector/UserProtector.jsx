import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function UserProtector() {
    const [notification, setNotification] = useState("");
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)


    useEffect(()=>{
        async function checkUser() {

                const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/auth/verifyuser",{
                    method: "GET",
                    credentials: "include"
                })        

                if(response.ok){
                    setLoading(false)
                }else{
                    const result = await response.text()
                    setNotification(result.message)
                    navigate("/userlogin")
                }
            }
            checkUser()
    }, [])

 
    if (loading) {
        return (
            <main className="flex justify-center items-center h-screen">
                <div>
                    <span className="w-screen loading loading-infinity text-warning"></span>

                </div>
            </main>
        )
    }
    return (


        <Outlet/>

    )
}