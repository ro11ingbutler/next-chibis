import { useState, useEffect } from "react"
import Image from "next/image"
import TraitDropdown from "./TraitDropdown"
import MintingPreview from "./MintingPreview"
import Button from "./Button"

import eyes1 from "/public/traits/eyes/eyes1.png"
import eyes2 from "/public/traits/eyes/eyes2.png"

import hair1 from "/public/traits/hair/hair1.png"
import hair2 from "/public/traits/hair/hair2.png"
import hair3 from "/public/traits/hair/hair3.png"

export default function MintingGrid() {

    const [eyes, setEyes] = useState([{ id: "eyes1", name: "Jester Eyes", image: eyes1 }, { id: "eyes2", name: "Tiger Eyes", image: eyes2 }])
    const [brows, setBrows] = useState([{ Trait1: "Trait #1" }, { Trait2: "Trait #2" }, { Trait3: "Trait #3" }])
    const [head, setHead] = useState([{ Trait1: "Trait #1" }, { Trait2: "Trait #2" }, { Trait3: "Trait #3" }])
    const [body, setBody] = useState([{ Trait1: "Trait #1" }, { Trait2: "Trait #2" }, { Trait3: "Trait #3" }])

    const [mouth, setMouth] = useState([{ Trait1: "Trait #1" }, { Trait2: "Trait #2" }, { Trait3: "Trait #3" }])
    const [hair, setHair] = useState([{ id: "hair1", name: "Hair 1", image: hair1 }, { id: "hair2", name: "Hair 2", image: hair2 }, { id: "hair3", name: "Hair 3", image: hair3 }])
    const [extra1, setExtra1] = useState([{ Trait1: "Trait #1" }, { Trait2: "Trait #2" }, { Trait3: "Trait #3" }])
    const [extra2, setExtra2] = useState([{ Trait1: "Trait #1" }, { Trait2: "Trait #2" }, { Trait3: "Trait #3" }])

    const defaultTraits = {
        eyes: null,
        brows: null,
        head: null,
        body: null,
        mouth: null,
        hair: null,
        extra1: null,
        extra2: null,
    }

    const [selectedTraits, setSelectedTraits] = useState(defaultTraits)

    function handleTraitChange(event, type) {
        const newTrait = {}
        newTrait[type] = JSON.parse(event.target.value)
        setSelectedTraits({ ...selectedTraits, ...newTrait })
    }

    function handleMintClick(event) {

    }

    function handleRandomiseClick(event) {

    }

    function handleRedoClick() {
        setSelectedTraits(defaultTraits)
    }

    return (
        <>
            <div className="bg-red-300 h-4/6 w-4/6 container mx-auto my-12 grid grid-cols-4 relative">
                <div>
                    <TraitDropdown traits={eyes} trait="eyes" onTraitChange={handleTraitChange}></TraitDropdown>
                </div>
                <div className="col-start-2 col-span-2 row-span-4 bg-slate-400 relative">
                    <MintingPreview selectedTraits={selectedTraits}></MintingPreview>
                </div>
                <div>
                    <TraitDropdown traits={hair} trait="hair" onTraitChange={handleTraitChange}></TraitDropdown>
                </div>
                <div>04</div>
                <div>05</div>
                <div>06</div>
                <div>07</div>
                <div>08</div>
                <div>09</div>

                <div className="col-start-2 grid place-content-center">
                    <Button outline>Mint my Chibi</Button>
                </div>
                <div className="grid place-content-center grid-flow-col gap-6">
                    <Button outline onClick={handleRedoClick}>Redo</Button>
                    <Button outline>Randomise</Button>
                </div>



            </div>
        </>
    )
}