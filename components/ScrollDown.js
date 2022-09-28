import Image from "next/image"
import letter from "/public/letter-smoller.png"

export default function ScrollDown(props) {
    return (
        <>
            <div className="grid place-items-center fixed bottom-2 left-0 right-0 z-20 text-slate-400 font-bold animate-bounce select-none" ref={props.compRef}>
                {/* <div className="text-xs">&darr; send your regards &darr;</div> */}
                {/* <div className="text-2xl place-self-center">&darr;</div> */}
                <Image  src={letter} layout="fixed" width={50} height={83} alt="..."></Image>
            </div>
        </>
    )
}