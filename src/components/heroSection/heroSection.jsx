import React from "react"
import HeroSectionImage from "../../assets/covid-19.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function HeroSection() {
    return (
        <section className="w-full h-full ">
            <div className="h-full w-screen bg-no-repeat bg-contain pt-12 h-" style={{ backgroundImage: `url(${HeroSectionImage})`}}>   
            <article className="w-2/4 ml-10  text-white">
            <p className="text-2xl ">Covid-19 <br/> Healthcare</p>
            <p className="mt-5">Book your next online appointments</p>
            </article>
            <article className="m-6 mt-80 bg-slate-200 px-4 py-2 rounded-2xl flex place-content-between content-center items-center" >
                <div>
                <p>STI Problems?</p>
                <p>find suitable specalists here</p>
                </div>
                <div className="bg-slate-100 w-10 h-10 rounded-lg items-center flex justify-center">
                <FontAwesomeIcon className="" icon={faArrowRight} />
                </div>
            </article>
            </div>
        </section>
    )
}