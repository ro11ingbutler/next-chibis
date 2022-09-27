import NavItem from "./NavItem"

export default function Nav () {
    return (
        <nav>
            <ul className="bg-red-100 flex flex-row place-content-center fixed top-0 left-0 right-0 z-20">

                <NavItem href="/" logo>Logo</NavItem>
                <NavItem href="/">Home</NavItem>
                <NavItem href="/">Home</NavItem>
                <NavItem href="/">Home</NavItem>
            </ul>
        </nav>
    )
}