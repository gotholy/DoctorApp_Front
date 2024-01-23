import React, {useState} from "react"

async function createDoctor(e, setNotification) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {};
    
    formData.forEach((value, key) => {
        data[key] = value;
    });

    const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/doctors/doctorregister", {
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

export default function DoctorForm() {
    const [notification, setNotification] = useState("");

    return (
        <section>
            {notification && <div className="notification">{notification}</div>}
        <form onSubmit={(e) => createDoctor(e, setNotification)} className="">
            <label htmlFor="name" className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Your name</span>
                </div>
                <input id="name" name="name" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </label>
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
            <label htmlFor="experience" className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Your experience in years?</span>
                </div>
                <input id="experience" name="experience" type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </label>
            <label htmlFor="speciality" className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">speciality</span>
            </div>
            <select id="speciality" name="speciality" className="select select-bordered" defaultValue="Pick one">
                <option disabled>Pick one</option>
                <option value="neurology">Neurology</option>
                <option value="genetics">Genetics</option>
                <option value="dentistry">Dentistry</option>
                <option value="dermatology">Dermatology</option>
                <option value="radiology">Radiology</option>
            </select>
            </label>
                <input type="submit" value="Register" className="btn btn-accent" />
        </form>
        </section>
    )
}