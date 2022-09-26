import Card from "./Card"

export default function Hero() {
    return (
        <div className="flex mx-auto xl:flex-row md:flex-col">
            <section className="basis-1/2 bg-purple-100 p-20">
                <h1 className="text-4xl p-4">Culpa eiusmod elit ipsum commodo et ea quis nisi.</h1>
                <p className="p-4">Cupidatat irure laborum ullamco proident occaecat veniam deserunt aliqua duis ea consectetur voluptate aliquip. Enim fugiat nisi occaecat excepteur velit nisi cillum minim. Aute pariatur duis anim aliquip dolore pariatur aliquip id esse qui commodo.</p>
            </section>
            <section className="basis-1/2 bg-purple-300 flex place-content-center">
                <Card className="m-10"></Card>
            </section>
        </div>
    )
}