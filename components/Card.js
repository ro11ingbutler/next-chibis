import clsx from "clsx"
import Image from "next/image"

export default function Card(props) {
    const {t, l, r, b} = props
    const className = clsx("bg-slate-800 w-72 rounded-xl shadow-2xl", props.className)

    return (
        <>
            <div className={className}>
                { b && <div className="absolute -inset-x-20 bottom-0 h-px bg-blue-300/40 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>}
                { l && <div className="absolute -inset-y-8 left-0 w-px bg-blue-300/40 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>}
                { r && <div className="absolute -inset-y-12 right-0 w-px bg-blue-300/40 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>}
                { t && <div className="absolute -inset-x-24 top-0 h-px bg-blue-300/40 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>}
                
                <div className="h-72 w-72 relative rounded-xl">
                    <Image layout="fill" src={props.image} alt="..." className="rounded-t-xl" priority="100"></Image>
                </div>
                <p className="font-bold px-4 pt-2 pb text-white text-lg">Menacing Chibi #1</p>
                <p className="px-4 pb-4 text-slate-400 text-sm">Non proident deserunt cillum aute enim. Mollit duis ad amet duis nisi irure. Consectetur in laborum fugiat elit nulla aliquip laborum cupidatat ipsum. Id tempor Lorem adipisicing laborum et.</p>
            </div>
        </>
    )
}