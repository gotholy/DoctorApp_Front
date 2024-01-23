import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBrain, faDna, faTooth } from "@fortawesome/free-solid-svg-icons";

export default function Speciality() {
    return (
        <section className="ml-6 h-fit">
            <h1 className="mb-5" >Speciality <span>😷</span> </h1>
            <div className="carousel carousel-center max-w-md space-x-4 ">
            <div className="bg-slate-200 min-h-24 min-w-30 carousel-item p-3 flex-col rounded-xl">
                <FontAwesomeIcon icon={faBrain} className="h-8 p-2 text-red-300"/>
                <div>Neurology</div>
            </div> 
            <div className="bg-slate-200 min-h-24 min-w-30 carousel-item p-3 flex-col rounded-xl">
                <FontAwesomeIcon icon={faDna} className="h-8 p-2 text-blue-300"/>
                <div>Genetics</div>
            </div> 
            <div className="bg-slate-200 min-h-24 min-w-30 carousel-item p-3 flex-col rounded-xl">                
                <FontAwesomeIcon icon={faTooth} className="h-8 p-2 text-amber-100"/>
                <div>Dentistry</div>
            </div> 
            <div className="bg-slate-200 min-h-24 min-w-30 carousel-item p-3 flex-col rounded-xl">                
                <FontAwesomeIcon icon={faBrain} className="h-8 p-2"/>
                <div>Dentistry</div>
            </div> 
            <div className="bg-slate-200 min-h-24 min-w-30 carousel-item p-3 flex-col rounded-xl">                
                <FontAwesomeIcon icon={faBrain} className="h-8 p-2"/>
                <div>Dentistry</div>
            </div> 
            <div className="bg-slate-200 min-h-24 min-w-30 carousel-item p-3 flex-col rounded-xl">                
                <FontAwesomeIcon icon={faBrain} className="h-8 p-2"/>
                <div>Dentistry</div>
            </div> 
            </div>
        </section>
    )
}