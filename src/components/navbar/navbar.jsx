export default function Navbar() {
    return (
        <section className="">
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-l">DoctorApp</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                    <li>
                        <details>
                        <summary>
                            For Doctors
                        </summary>
                        <ul className="p-2 bg-base-100 rounded-t-none">
                            <li><a>Register</a></li>
                            <li><a>Login</a></li>
                        </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                        <summary>
                            For Patients
                        </summary>
                        <ul className="p-2 bg-base-100 rounded-t-none">
                            <li><a>Register</a></li>
                            <li><a>Login</a></li>
                        </ul>
                        </details>
                    </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}