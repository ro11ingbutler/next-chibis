import clsx from "clsx"
import Image from "next/image"

export default function Card(props) {

    const className = clsx("bg-slate-800 w-72 rounded-xl shadow-2xl", props.className)

    return (
        <>
            <div className={className}>
                <div className="h-72 w-72 relative rounded-xl">
                    <Image layout="fill" src={props.image} alt="..." className="rounded-t-xl" priority="100"></Image>
                </div>
                <p className="font-bold px-4 pt-2 pb text-white text-lg">Menacing Chibi #1</p>
                <p className="px-4 pb-4 text-slate-400 text-sm">Non proident deserunt cillum aute enim. Mollit duis ad amet duis nisi irure. Consectetur in laborum fugiat elit nulla aliquip laborum cupidatat ipsum. Id tempor Lorem adipisicing laborum et.</p>
            </div>
        </>
    )
}