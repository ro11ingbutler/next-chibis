import Card from "./Card"
import rb from "/public/rb.png"
import hitrun from "/public/hitrun.png"
import jgt from "/public/jgt.png"
import Button from "./Button"

export default function Hero() {
    return (
        <div className="flex mx-auto xl:flex-row md:flex-col h-screen pt-20 bg-gradient-to-br from-slate-800 via-black/50 to-slate-900">
            <section className="basis-1/2 p-20 grid place-content-center">
                <h1 className="text-6xl p-4 text-white font-bold">We are breaking the Generative PFP meta</h1>
                <p className="p-4 text-slate-400"><strong className="text-slate-200 text-lg">Menacing Chibis</strong> is not just your typical PFP (Profile Picture) NFT. You&apos;re minting a character design; a brand; an identity. Menacing Chibis is a customizable, gamified NFT PFP collection from Rolling-kai. The goal is to &quot;mint your own Chibi&quot; from a pool of traits and upgrade them through mini-games in our discord server.</p>
                <p className="p-4 text-slate-400 italic text-sm">&ldquo;It seems difficult to draw a fully-rendered (realistic head and body) character. But if you have a Chibi, it&apos;s easier to draw. So I put the details behind and think of a Chibi first.&rdquo; -- Naoki Saito</p>
                <div className="p-4 flex gap-8">
                    <Button outline>Mint Now</Button>
                    <Button solid>Contract Address</Button>
                </div>
            </section>
            <section className="basis-1/2 grid grid-flow-col place-content-center relative">
                <Card className="translate-x-16" image={hitrun}></Card>
                <Card className="z-10 scale-[1.30]" image={rb}></Card>
                <Card className="-translate-x-16" image={jgt}></Card>
            </section>
        </div>
    )
}