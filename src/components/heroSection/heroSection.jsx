import React from "react"
import { Link, useLocation } from "react-router-dom"
import HeroSectionImage from "../../assets/covid-19.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function HeroSection() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const isDoctorDashboard = location.pathname === "/doctordashboard";
    const isUserDashboard = location.pathname === "/userdashboard";

    return (
        <section className="w-full h-full ">
           <div className={`HeroSection ${isHomePage ? "home-HeroSection" : "dashboard-HeroSection"}`}>
                <div className="flex-none">
                    {isHomePage ? (
                        <div className="bg-no-repeat bg-contain pt-12 " style={{ backgroundImage: `url(${HeroSectionImage})`}}>   
                            <article className="w-2/4 ml-10  text-white">
                                <p className="text-2xl ">Covid-19 <br/> Healthcare</p>
                                <p className="mt-5">Book your next online appointments</p>
                            </article>
                            <article className="m-6 mt-80 bg-slate-200 px-4 py-2 rounded-2xl flex place-content-between content-center items-center" >
                                <div>
                                    <p>STI Problems?</p>
                                    <p className="text-slate-400">find suitable specalists here</p>
                                </div>
                                <div className="bg-slate-100 w-10 h-10 rounded-lg items-center flex justify-center">
                                    <FontAwesomeIcon className="" icon={faArrowRight} />
                                </div>
                            </article>
                        </div>
                    ) : (
                        <div>
                            {isDoctorDashboard ? (
                                <div className="h-full w-screen bg-no-repeat bg-contain pt-12 " style={{ backgroundImage: `url(${HeroSectionImage})`}}>   
                                <article className="w-2/4 m-10 text-white">
                                    <p className="text-2xl ">Covid-19 <br/> Healthcare</p>
                                    <p className="mt-5">Book your next online appointments</p>
                                </article>
                                <article className="m-6 mt-80 bg-slate-200 px-4 py-2 rounded-2xl flex place-content-between content-center items-center" >
                                    <div>
                                        <p>STI Problems?</p>
                                        <p className="text-slate-400">find suitable specalists here</p>
                                    </div>
                                    <div className="bg-slate-100 w-10 h-10 rounded-lg items-center flex justify-center">
                                        <FontAwesomeIcon className="" icon={faArrowRight} />
                                    </div>
                                </article>
                            </div>
                            ) : (
                                <div className="bg-no-repeat bg-contain pt-12 text-center" style={{ backgroundImage: `url(${HeroSectionImage})`}}>   
                                <article className="w-3/4 m-10 text-white grid grid-cols-2 gap-8" >
                                    <Link to={"/userdetails"} className="btn btn-access">PROFIL</Link>
                                    <Link to={"/userappointments"} className="btn btn-access">APPOINTMENTS</Link>
                                    <Link to={"/userdocuments"} className="btn btn-access">DOCUMENTS</Link>
                                    <Link to={"/userfavdocs"} className="btn btn-access">YOUR DOCS</Link>
                                </article>
                                <Link to={"/alldoctors"} className="m-6 mt-80 bg-slate-200 px-4 py-2 rounded-2xl flex place-content-between content-center items-center cursor-pointer" >
                                    <div>
                                        <p className="mr-24">Need a doctor?</p>
                                        <p className="text-slate-400">find suitable specalists here</p>
                                    </div>
                                    <div className="bg-slate-100 w-10 h-10 rounded-lg items-center flex justify-center">
                                        <FontAwesomeIcon className="" icon={faArrowRight} />
                                    </div>
                                </Link >
                            </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}



