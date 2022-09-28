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

import bg1 from "/public/traits/bg/bg1.png"
import bg2 from "/public/traits/bg/bg2.png"

import body1 from "/public/traits/body/body1.png"
import body2 from "/public/traits/body/body2.png"

import mouth1 from "/public/traits/mouth/mouth1.png"
import mouth2 from "/public/traits/mouth/mouth2.png"


export default function MintingGrid() {

    const [traits, setTraits] = useState({
        eyes: [{ id: "eyes1", name: "Jester Eyes", image: eyes1 }, { id: "eyes2", name: "Tiger Eyes", image: eyes2 }],
        body: [{ id: "body1", name: "Body 1", image: body1 }, { id: "body2", name: "Body 2", image: body2 }],
        mouth: [{ id: "mouth1", name: "Mouth 1", image: mouth1 }, { id: "mouth2", name: "Mouth 2", image: mouth2 }],
        hair: [{ id: "hair1", name: "Hair 1", image: hair1 }, { id: "hair2", name: "Hair 2", image: hair2 }, { id: "hair3", name: "Hair 3", image: hair3 }],
        bg: [{ id: "bg1", name: "BG 1", image: bg1 }, { id: "bg2", name: "BG 2", image: bg2 }],
    })

    const defaultTraits = {
        eyes: null,
        body: null,
        mouth: null,
        hair: null,
        bg: null,
    }

    const [selectedTraits, setSelectedTraits] = useState(defaultTraits)

    function handleTraitChange(event, type) {
        const newTrait = {}
        
        if (!event.target.value) {
            newTrait[type] = null
            setSelectedTraits({ ...selectedTraits, ...newTrait })
        } else {
            newTrait[type] = traits[type].find(item => item.id === event.target.value)
            
            setSelectedTraits({ ...selectedTraits, ...newTrait })
        }
    }

    function handleMintClick(event) {

    }

    function handleRandomiseClick(event) {
        const newTrait = defaultTraits

        newTrait.eyes = traits.eyes[Math.floor(Math.random() * traits.eyes.length)]
        newTrait.body = traits.body[Math.floor(Math.random() * traits.body.length)]
        newTrait.mouth = traits.mouth[Math.floor(Math.random() * traits.mouth.length)]
        newTrait.hair = traits.hair[Math.floor(Math.random() * traits.hair.length)]
        newTrait.bg = traits.bg[Math.floor(Math.random() * traits.bg.length)]

        setSelectedTraits({ ...selectedTraits, ...newTrait })
    }

    function handleRedoClick() {
        setSelectedTraits(defaultTraits)
    }

    return (
        <>
            <div className="h-4/6 w-4/6 container mx-auto my-12 grid grid-cols-4 relative">
                <div className="grid grid-flow-col gap-5 place-content-center">
                    <TraitDropdown traits={traits.eyes} selectedTrait={selectedTraits.eyes} type="eyes" onTraitChange={handleTraitChange}></TraitDropdown>
                </div>
                <div className="col-start-2 col-span-2 row-span-4  relative">
                    <MintingPreview selectedTraits={selectedTraits}></MintingPreview>
                </div>
                <div className="grid grid-flow-col gap-5 place-content-center">
                    <TraitDropdown traits={traits.hair} selectedTrait={selectedTraits.hair} type="hair" onTraitChange={handleTraitChange}></TraitDropdown>
                </div>
                <div className="grid grid-flow-col gap-5 place-content-center">
                    <TraitDropdown traits={traits.mouth} selectedTrait={selectedTraits.mouth} type="mouth" onTraitChange={handleTraitChange}></TraitDropdown>
                </div>
                <div className="grid grid-flow-col gap-5 place-content-center">
                    <TraitDropdown traits={traits.body} selectedTrait={selectedTraits.body} type="body" onTraitChange={handleTraitChange}></TraitDropdown>
                </div>
                <div className="grid grid-flow-col gap-5 place-content-center">
                    <TraitDropdown traits={traits.bg} selectedTrait={selectedTraits.bg} type="bg" onTraitChange={handleTraitChange}></TraitDropdown>
                </div>
                <div className="grid grid-flow-col gap-5 place-content-center">07</div>
                <div className="grid grid-flow-col gap-5 place-content-center">08</div>
                <div className="grid grid-flow-col gap-5 place-content-center">09</div>

                <div className="col-span-4 grid gap-5 grid-flow-col place-content-center">
                    <Button outline>Mint my Chibi</Button>
                    <Button outline onClick={handleRedoClick}>Redo</Button>
                    <Button outline onClick={handleRandomiseClick}>Randomise</Button>
                </div>



            </div>
        </>
    )
}