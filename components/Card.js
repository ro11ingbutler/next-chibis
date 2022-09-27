import clsx from "clsx"
import Image from "next/image"

export default function Card(props) {

    const className = clsx("bg-purple-600 w-72 rounded-xl shadow-2xl", props.className)
    
    return (
        <>
            <div className={className}>
                <div className="h-72 w-72 bg-red-400 relative rounded-xl">
                    <Image layout="fill" src={props.image} alt="..." className="rounded-t-xl"></Image>
                </div>
                <p className="font-bold px-4 pt-4 pb-2">Menacing Chibi #1</p>
                <p className="px-4 pb-4">Voluptate sunt consequat enim velit ipsum aute cillum consequat non commodo Lorem duis exercitation velit. </p>
            </div>
        </>
    )
}