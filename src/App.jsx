import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import History from "@/components/History"
import Usage from "@/components/Usage"
import Reviews from "@/components/Reviews"
import WhereToBuy from "@/components/WhereToBuy"
import Footer from "@/components/Footer"

export default function App() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar/>
            <main>
                <Hero/>
                <History/>
                <Usage/>
                <Reviews/>
                <WhereToBuy/>
            </main>
            <Footer/>
        </div>
    )
}
