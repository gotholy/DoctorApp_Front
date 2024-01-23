import React from "react"

async function createUser(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {};
    
    formData.forEach((value, key) => {
        data[key] = value;
    });

    const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/users/userregister", {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();
    if(response.ok){
        setNotification(result.message);
        e.target.reset()
    }else {
        setNotification(result.message);
    } 
}

export default function UserForm() {
    const [notification, setNotification] = useState("");

    return (
        <section>
        {notification && <div className="notification">{notification}</div>}
        <form onSubmit={createUser} className="">
            <label htmlFor="email" className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Your Email</span>
                </div>
                <input id="email" name="email" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </label>
            <label htmlFor="password" className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Your Password</span>
                </div>
                <input id="password" name="password" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </label>
            <label htmlFor="birthday" className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Your Birthday?</span>
                </div>
                <input id="birthday" name="birthday" type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </label>
                <input type="submit" value="Register" className="btn btn-accent" />
        </form>
    </section>
    )
}