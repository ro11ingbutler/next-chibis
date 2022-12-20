import Card from "./Card"
import rb from "/public/rb.png"
import hitrun from "/public/hitrun.png"
import jgt from "/public/jgt.png"
import Button from "./Button"
import styles from '../styles/Hero.module.css'

export default function Hero() {
    return (
        <section id="hero" className="flex mx-auto lg:flex-row flex-col-reverse h-screen bg-gradient-to-br from-slate-800 via-black/50 to-slate-900 py-6">
            <div className="px-36 py-2">
                <p className=" p-4 text-white font-bold text-3xl">We are breaking the Generative PFP meta</p>
                <div className="p-4 text-md text-justify">
                    <h1 className="text-slate-200 text-xl inline">Menacing Chibis</h1>
                    <p className="inline text-slate-400 p-0 m-0"> is not just your typical PFP (Profile Picture) NFT. You&apos;re minting a character design; a brand; an identity. Menacing Chibis is a customizable, gamified NFT PFP collection from Rolling-kai. The goal is to &quot;mint your own Chibi&quot; from a pool of traits and upgrade them through mini-games in our discord server.</p>
                </div>
                <p className="p-4 text-slate-400 italic text-justify">&ldquo;It seems difficult to draw a fully-rendered (realistic head and body) character. But if you have a Chibi, it&apos;s easier to draw. So I put the details behind and think of a Chibi first.&rdquo; -- Naoki Saito</p>
                <div className="p-4 flex gap-8">
                    <Button outline>Mint Now</Button>
                    <Button solid>Contract Address</Button>
                </div>
            </div>
            <div className="mx-auto grid grid-flow-col place-content-center">
                <Card className="translate-x-16 scale-[0.75]" image={hitrun}></Card>
                <Card className="z-10 scale-[1.0]" image={rb}></Card>
                <Card className="-translate-x-28 scale-[0.75]" image={jgt}></Card>
            </div>
        </section>
    )
}