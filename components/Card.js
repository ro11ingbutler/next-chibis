import clsx from "clsx"
import Image from "next/image"
import rolling from "/public/rolling.jpg"

export default function Card(props) {

    const className = clsx("h-{125} bg-purple-600 flex flex-col relative w-96 rounded-xl shadow-2xl", props.className)
    
    return (
        <>
            <div className={className}>
                <div className="h-96 w-96 bg-red-400 relative rounded-xl">
                    <Image layout="fill" src={rolling} alt="..." className="rounded-t-xl"></Image>
                </div>
                <p className="font-bold px-4 pt-4 pb-2">Menacing Chibi #1</p>
                <p className="px-4 pb-4">Voluptate sunt consequat enim velit ipsum aute cillum consequat non commodo Lorem duis exercitation velit. </p>
            </div>
        </>
    )
}