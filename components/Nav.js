import { useEffect, useRef } from "react"
import NavItem from "./NavItem"

export default function Nav() {

    const navRef = useRef()
    
    useEffect(() => {
        function toggleNavBarColor() {
            if(window.scrollY > navRef.current.clientHeight){
                navRef.current.classList.add("bg-slate-900/95")
            } else {
                navRef.current.classList.remove("bg-slate-900/95")
            }
        }

        window.addEventListener("scroll", toggleNavBarColor)
 
        return () => {
            window.removeEventListener("scroll", toggleNavBarColor)
        }
    })

    return (
        <nav>
            <ul className="flex flex-row place-content-center fixed top-0 left-0 right-0 z-20 text-white font-semibold bg-slate-900" ref={navRef}>
                <NavItem href="/" logo>Logo</NavItem>
                <NavItem href="/">Home</NavItem>
                <NavItem href="/">Home</NavItem>
                <NavItem href="/">Home</NavItem>
                <NavItem href="/">0xC4...b42</NavItem>
            </ul>
        </nav>
    )
}