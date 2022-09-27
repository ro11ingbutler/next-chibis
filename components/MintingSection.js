import MintingGrid from "./MintingGrid"

export default function MintingSection() {
    return (
        <>
            <section className="h-screen bg-yellow-50 flex flex-col place-content-center relative">
                <h1 className="mx-auto text-4xl">Et et incididunt aliqua irure veniam sit esse elit officia exercitation consequat.</h1>
                <p className="mx-auto pt-8 w-2/3">Sit ullamco deserunt reprehenderit enim qui elit ipsum enim officia ad eiusmod. Consequat nulla minim aliqua velit. Anim veniam reprehenderit enim laborum velit. Duis et minim amet sit et deserunt nisi commodo voluptate sint. Pariatur tempor ut exercitation deserunt irure officia ullamco amet fugiat enim et velit. Aute labore irure sit ea tempor sit aliqua.</p>
                <MintingGrid></MintingGrid>
            </section>
        </>
    )
}