import Card from "./Card"
import rb from "/public/rb.png"
import hitrun from "/public/hitrun.png"
import jgt from "/public/jgt.png"
import Button from "./Button"

export default function Hero() {
    return (
        <div className="flex mx-auto xl:flex-row md:flex-col h-screen pt-20">
            <section className="basis-1/2 bg-purple-700 p-20 grid place-content-center">
                <h1 className="text-4xl p-4">Culpa eiusmod elit ipsum commodo et ea quis nisi.</h1>
                <p className="p-4">Cupidatat irure laborum ullamco proident occaecat veniam deserunt aliqua duis ea consectetur voluptate aliquip. Enim fugiat nisi occaecat excepteur velit nisi cillum minim. Aute pariatur duis anim aliquip dolore pariatur aliquip id esse qui commodo.</p>
                <div className="p-4 flex gap-8">
                    <Button outline>Mint Now</Button>
                    <Button solid>Contract Address</Button>
                </div>
            </section>
            <section className="basis-1/2 bg-purple-300 grid grid-flow-col place-content-center">
                <Card className="translate-x-16 translate-y-10" image={hitrun}></Card>
                <Card className="z-10 -translate-y-10" image={rb}></Card>
                <Card className="-translate-x-16 translate-y-10" image={jgt}></Card>
                {/* <Card className="absolute mx-auto "></Card> */}
                {/* <Card className="my-20 absolute"></Card> */}
            </section>
        </div>
    )
}