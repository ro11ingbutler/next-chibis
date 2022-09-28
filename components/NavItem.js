import Link from "next/link"

export default function NavItem(props) {

    return (
        <li className="px-16 py-7">
            <Link href={props.href}>
                <a className="text-lg">{props.children}</a>
            </Link>
        </li>
    )
}