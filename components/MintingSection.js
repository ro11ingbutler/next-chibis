import Divider from "./Divider"
import MintingGrid from "./MintingGrid"

export default function MintingSection() {
    return (
        <>
            <section className="h-screen my-8 flex flex-col place-content-center relative bg-gradient-to-b from-slate-900 via-black/5 to-blue-900/10">
                <h1 className="mx-auto text-4xl text-white font-bold">Build Your Own Chibi</h1>
                <Divider className="w-2/3 place-self-center py-4"></Divider>
                <p className="mx-auto w-2/3 text-slate-400">Sit ullamco deserunt reprehenderit enim qui elit ipsum enim officia ad eiusmod. Consequat nulla minim aliqua velit. Anim veniam reprehenderit enim laborum velit. Duis et minim amet sit et deserunt nisi commodo voluptate sint. Pariatur tempor ut exercitation deserunt irure officia ullamco amet fugiat enim et velit. Aute labore irure sit ea tempor sit aliqua.</p>
                <MintingGrid></MintingGrid>
            </section>
        </>
    )
}