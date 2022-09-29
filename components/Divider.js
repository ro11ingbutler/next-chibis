import clsx from "clsx"

export default function Divider(props) {

    const classes = clsx("flex items-center text-[8px] cursor-default text-blue-100/90", props.className)
    return (
        <>
            <div className={classes}>
                <hr className="grow border-blue-200/50"></hr>
                <hr className="grow border-blue-200/60"></hr>
                <hr className="grow border-blue-200/70"></hr>
                <hr className="grow border-blue-200/75" ></hr>
                <hr className="grow border-blue-200/80"></hr>
                <hr className="grow border-blue-200/90"></hr>
                <hr className="grow border-blue-200"></hr>
                <p className="text-center grow-0">1214</p>
                <hr className="grow border-blue-100/90"></hr>
                <hr className="grow border-blue-100/70"></hr>
                <hr className="grow border-blue-100/50"></hr>
            </div>
        </>
    )
}