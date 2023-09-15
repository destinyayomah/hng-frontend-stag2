import Featured from "../components/Featured"
import Footer from "../components/Footer"
import HeroSlider from "../components/HeroSlider"
import NavBar from "../components/NavBar"

const Home = () => {
    return <>
        <NavBar />
        <HeroSlider />
        <Featured />
        <Footer />
    </>
}

export default Home