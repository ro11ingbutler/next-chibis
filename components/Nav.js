import { useEffect, useRef } from "react"
import NavItem from "./NavItem"
import ScrollDown from "./ScrollDown"

export default function Nav(props) {

    const navRef = useRef()
    const scrollDownRef = useRef()

    useEffect(() => {
        function toggleNavBarColor() {
            if (window.scrollY > navRef.current.clientHeight) {
                navRef.current.classList.add("bg-slate-900/90", "backdrop-blur")
                navRef.current.classList.remove("border-b-2", "border-slate-800/75")
                scrollDownRef.current.classList.add("hidden")
            } else {
                navRef.current.classList.remove("bg-slate-900/90", "backdrop-blur")
                navRef.current.classList.add("border-b-2", "border-slate-800/75")
                scrollDownRef.current.classList.remove("hidden")
            }
        }

        window.addEventListener("scroll", toggleNavBarColor)

        return () => {
            window.removeEventListener("scroll", toggleNavBarColor)
        }
    })

    return (
        <>
            <nav>
                <ul className="flex flex-row place-content-center fixed top-0 left-0 right-0 z-20 text-white font-semibold border-b-2 border-slate-800/75" ref={navRef}>
                    <NavItem href="/" logo>Logo</NavItem>
                    <NavItem href="/">Home</NavItem>
                    <NavItem href="/">Home</NavItem>
                    <NavItem href="/">Home</NavItem>
                    <NavItem href="/">0xC4...b42</NavItem>
                </ul>
            </nav>
            {props.scrollDown && <ScrollDown compRef={scrollDownRef}></ScrollDown>}
        </>
    )
}