import Nav from "/components/Nav.js"
import Hero from "../components/Hero"
import Minting from "../components/MintingSection"
import Footer from "../components/Footer"

export default function Home() {
    return (
        <>
            <Nav scrollDown></Nav>
            <Hero></Hero>
            <Minting></Minting>
            <Footer></Footer>
        </>
    )
}