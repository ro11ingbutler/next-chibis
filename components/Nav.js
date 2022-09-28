import NavItem from "./NavItem"

export default function Nav () {
    return (
        <nav>
            <ul className="flex flex-row place-content-center fixed top-0 left-0 right-0 z-20 text-white font-semibold">
                <NavItem href="/" logo>Logo</NavItem>
                <NavItem href="/">Home</NavItem>
                <NavItem href="/">Home</NavItem>
                <NavItem href="/">Home</NavItem>
                <NavItem href="/">0xC4...b42</NavItem>
            </ul>
        </nav>
    )
}