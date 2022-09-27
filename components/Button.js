import clsx from "clsx"
export default function Button(props) {
    const { onClick } = props

    const classes = clsx(props.className, "h-16", {
        "border-blue-200 rounded-lg border-2 p-4 text-blue-200 hover:bg-blue-200/10": props.outline,
        "rounded-lg p-4 bg-red-300 hover:border-red-300 hover:border-2 border-2 border-transparent hover:bg-red-300/50": props.solid,
    })

    return (
        <button className={classes} onClick={() => onClick()}>{props.children}</button>
    )
}