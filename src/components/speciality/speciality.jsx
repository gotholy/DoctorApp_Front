import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";

export default function Speciality() {
    return (
        <section className="ml-6 h-fit">
            <h1 className="mb-5" >Speciality <span>😷</span> </h1>
            <div className="carousel carousel-center max-w-md space-x-4 ">
            <div className="bg-slate-200 min-h-24 w-30 carousel-item p-3 flex-col rounded-xl">
                <FontAwesomeIcon icon={faBrain} className="h-8 p-2"/>
                <div>Neurology</div>
            </div> 
            <div className="bg-slate-200 min-h-24 w-30 carousel-item p-3 flex-col rounded-xl">
                <FontAwesomeIcon icon={faBrain} className="h-8 p-2"/>
                <div>Genetics</div>
            </div> 
            <div className="bg-slate-200 min-h-24 w-30 carousel-item p-3 flex-col rounded-xl">                
                <FontAwesomeIcon icon={faBrain} className="h-8 p-2"/>
                <div>Dentistry</div>
            </div> 
            <div className="bg-slate-200 min-h-24 w-30 carousel-item p-3 flex-col rounded-xl">                
                <FontAwesomeIcon icon={faBrain} className="h-8 p-2"/>
                <div>Dentistry</div>
            </div> 
            <div className="bg-slate-200 min-h-24 w-30 carousel-item p-3 flex-col rounded-xl">                
                <FontAwesomeIcon icon={faBrain} className="h-8 p-2"/>
                <div>Dentistry</div>
            </div> 
            <div className="bg-slate-200 min-h-24 w-30 carousel-item p-3 flex-col rounded-xl">                
                <FontAwesomeIcon icon={faBrain} className="h-8 p-2"/>
                <div>Dentistry</div>
            </div> 
            </div>
        </section>
    )
}