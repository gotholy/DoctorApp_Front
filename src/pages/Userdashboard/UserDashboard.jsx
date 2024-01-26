import HeroSection from "../../components/heroSection/heroSection";
import Navbar from "../../components/navbar/navbar";
import Speciality from "../../components/speciality/speciality";

export default function UserDashboard() {

    return (
        <main className="m-0 p-0 h-fit">
            <Navbar/>
            <HeroSection/>
            <Speciality/>
        </main>
    )
}