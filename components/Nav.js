import NavItem from "./NavItem"

export default function Nav () {
    return (
        <nav>
            <ul className="bg-red-100 flex flex-row place-content-center">

                <NavItem href="/" logo>Logo</NavItem>
                <NavItem href="/">Home</NavItem>
                <NavItem href="/">Home</NavItem>
                <NavItem href="/">Home</NavItem>
            </ul>
        </nav>
    )
}