import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const isDoctorDashboard = location.pathname === "/doctordashboard";
    const isUserDashboard = location.pathname === "/userdashboard";

    return (
        <section className="">
        <div className={`navbar ${isHomePage ? "home-navbar" : "dashboard-navbar"}`}>
            <div className="flex-1">
                <Link to={isHomePage ? "/" : (isDoctorDashboard ? "/doctordashboard" : "/userdashboard")} className="btn btn-ghost text-l">DoctorApp</Link>
            </div>
            <div className="flex-none">
                {isHomePage ? (
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary>
                                    For Doctors
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                    <li><Link to={"/doctorregister"}>Register</Link></li>
                                    <li><Link to={"/doctorlogin"}>Login</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>
                                    For Patients
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                    <li><Link to={"/userregister"}>Register</Link></li>
                                    <li><Link to={"/userlogin"}>Login</Link></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                ) : (
                    <div>
                        {isDoctorDashboard ? (
                            <Link to="/doctorprofile">Profile</Link>
                        ) : (
                            <>
                                <Link to="/userprofile">Profile</Link>
                                <Link to="/appointments">Appointments</Link>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    </section>
    )
}