import { useState } from "react"
import Featured from "../components/Featured"
import Footer from "../components/Footer"
import HeroSlider from "../components/HeroSlider"
import NavBar from "../components/NavBar"
import Searching from "../components/Searching"

const Home = () => {
    const [searchKeyword, setSearchKeyword] = useState('');

    const handleSearching = (keyword: string) => {
        setSearchKeyword(keyword);
    }

    const toggleSearchVisiblity = () => {
        if (searchKeyword == '') {
            setSearchKeyword(' ');
        } else {
            setSearchKeyword('');
        }
    }

    return <>
        <NavBar onChange={handleSearching} toggleSearchVisiblity={toggleSearchVisiblity} />
        {searchKeyword ? <Searching keyword={searchKeyword} onChange={handleSearching} /> :
            <>
                <HeroSlider />
                <Featured />
                <Footer />
            </>
        }
    </>
}

export default Home