import Link from "next/link"

export default function NavItem(props) {

    return (
        <li className="px-16 py-6">
            <Link href={props.href}>
                <a>{props.children}</a>
            </Link>
        </li>
    )
}