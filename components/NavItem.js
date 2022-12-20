import clsx from "clsx"
import Link from "next/link"

export default function NavItem(props) {

    // const classes = clsx("px-12 py-6", props.className)

    return (
        <li className="px-12 py-0">
            <Link href={props.href}>
                <a className="text-lg flex items-center">{props.children}</a>
            </Link>
        </li>
    )
}