import clsx from "clsx"
export default function Button(props) {
    const { onClick } = props

    const classes = clsx(props.className, "h-12", {
        "border-blue-200 rounded-xl border-2 p-2 flex place-content-center text-blue-200 hover:bg-blue-200/10 flex items-center": props.outline,
        "rounded-xl p-2 flex place-content-center bg-red-300 hover:border-red-300 hover:border-2 border-2 border-transparent hover:bg-red-300/90 flex items-center": props.solid,
    })

    return (
        <button className={classes} onClick={() => onClick()}>{props.children}</button>
    )
}